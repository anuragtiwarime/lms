import { Router } from 'express';
import {
  subscribe,
  verifySubscription,
} from '../controllers/payment.controller.js';
import { isLoggedIn } from '../middlewares/auth.middleware.js';

const router = Router();

router.route('/subscribe').post(isLoggedIn, subscribe);
router.route('/verify').post(isLoggedIn, verifySubscription);

export default router;
