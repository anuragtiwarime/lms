import { Router } from 'express';
import {
  contactUs,
  userStats,
} from '../controllers/miscellaneous.controller.js';

const router = Router();

// {{URL}}/api/v1/
router.route('/contact').post(contactUs);
router.route('/admin/stats/users').get(userStats);

export default router;
