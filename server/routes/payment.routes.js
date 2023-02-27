import { Router } from 'express';
import {
  getRazorpayApiKey,
  subscribe,
  verifySubscription,
} from '../controllers/payment.controller.js';
import { isLoggedIn } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/subscribe').post(isLoggedIn, subscribe);
router.route('/verify').post(isLoggedIn, verifySubscription);
router.route('/razorpay-key').get(getRazorpayApiKey);

export default router;
