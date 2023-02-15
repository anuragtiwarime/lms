import asyncHandler from '../middlewares/asyncHandler.middleware.js';
import User from '../models/user.model.js';
import AppErr from '../utils/appErr.js';
import { razorpay } from '../server.js';

export const subscribe = asyncHandler(async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findById(id);

  if (user.role === 'admin') {
    return next(new AppErr('Admin cannot purchase a subscription', 400));
  }

  const subscription = await razorpay.subscriptions.create({
    plan_id: process.env.RAZORPAY_PLAN_ID,
    customer_notify: 1,
    quantity: 5,
    total_count: 6,
  });

  user.subscription.id = subscription.id;
  user.subscription.status = subscription.status;

  await user.save();

  res.status(200).json({
    success: true,
    message: 'subscribed successfully',
    subscription,
  });
});
