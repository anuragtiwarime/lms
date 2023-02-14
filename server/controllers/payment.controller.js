import asyncHandler from '../middlewares/asyncHandler.middleware.js';
import User from '../models/user.model.js';

export const subscribe = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
});
