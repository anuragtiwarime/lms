import crypto from 'crypto';

import asyncHandler from '../middlewares/asyncHandler.middleware.js';
import User from '../models/user.model.js';
import AppErr from '../utils/appErr.js';
import { razorpay } from '../server.js';
import Payment from '../models/Payment.model.js';

export const activateSubscription = asyncHandler(async (req, res, next) => {
  // Extracting ID from request obj
  const { id } = req.user;

  // Finding the user based on the ID
  const user = await User.findById(id);

  // Checking the user role
  if (user.role === 'ADMIN') {
    return next(new AppErr('Admin cannot purchase a subscription', 400));
  }

  // Creating a subscription using razorpay that we imported from the server
  const subscription = await razorpay.subscriptions.create({
    plan_id: process.env.RAZORPAY_PLAN_ID, // The unique plan ID
    customer_notify: 1, // 1 means razorpay will handle notifying the customer, 0 means we will not notify the customer
    total_count: 12, // 12 means it will charge every month for a 1-year sub.
  });

  // Adding the ID and the status to the user account
  user.subscription.id = subscription.id;
  user.subscription.status = subscription.status;

  // Saving the user object
  await user.save();

  res.status(200).json({
    success: true,
    message: 'subscribed successfully',
    subscription_id: subscription.id,
  });
});

export const verifySubscription = asyncHandler(async (req, res, _next) => {
  const { id } = req.user;
  const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature } =
    req.body;

  const user = await User.findById(id);

  const subscriptionId = user.subscription.id;

  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_SECRET)
    .update(`${razorpay_payment_id}|${subscriptionId}`)
    .digest('hex');

  if (generatedSignature !== razorpay_signature) {
    return res.redirect(process.env.FRONTEND_URL + '/payment-failed');
  }

  await Payment.create({
    razorpay_payment_id,
    razorpay_subscription_id,
    razorpay_signature,
  });

  user.subscription.status = 'active';

  await user.save();

  res.redirect(
    process.env.FRONTEND_URL + '/payment-success?ref=' + razorpay_payment_id
  );
});

export const cancelSubscription = asyncHandler(async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findById(id);

  // Checking the user role
  if (user.role === 'ADMIN') {
    return next(new AppErr('Admin cannot cancel a subscription', 400));
  }

  const subscriptionId = user.subscription.id;

  console.log(subscriptionId, 'sub ID');

  if (user.subscription.status !== 'created') {
    return next(
      new AppErr(
        'Subscription is not active, please subscribe first to cancel your subscription',
        400
      )
    );
  }

  // Creating a subscription using razorpay that we imported from the server
  try {
    const subscription = await razorpay.subscriptions.cancel({
      subscriptionId, // subscription id
    });

    user.subscription.status = subscription.status;
  } catch (error) {
    console.log(error);
  }

  // Adding the subscription status to the user account

  // Saving the user object
  await user.save();

  console.log(user, 'updated user');

  res.status(200).json({
    success: true,
    message: 'Subscription canceled successfully',
  });
});

export const getRazorpayApiKey = asyncHandler(async (_req, res, _next) => {
  res.status(200).json({
    success: true,
    message: 'Razorpay API key',
    key: process.env.RAZORPAY_KEY_ID,
  });
});
