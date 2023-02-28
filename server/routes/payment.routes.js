import { Router } from 'express';
import {
  getRazorpayApiKey,
  activateSubscription,
  verifySubscription,
  cancelSubscription,
} from '../controllers/payment.controller.js';
import { isLoggedIn } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/subscribe').post(isLoggedIn, activateSubscription);
router.route('/verify').post(isLoggedIn, verifySubscription);
router.route('/razorpay-key').get(getRazorpayApiKey);
router.route('/unsubscribe').post(isLoggedIn, cancelSubscription);

export default router;
