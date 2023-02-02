import { Router } from "express";
import {
  createCourse,
  getAllCourses,
} from "../controllers/course.controller.js";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

// , isLoggedIn, authorizeRoles("ADMIN", "USER") - middlewares

router.get("/", getAllCourses);
router.post("/", isLoggedIn, authorizeRoles("ADMIN"), createCourse);

export default router;
