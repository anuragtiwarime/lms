import { Router } from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/course.controller.js";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/all", isLoggedIn, authorizeRoles("ADMIN", "USER"), getAllCourses);
router.post("/create", createCourse);

export default router;
