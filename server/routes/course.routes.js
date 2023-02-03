import { Router } from "express";
import {
  createCourse,
  getAllCourses,
  getLecturesByCourseId,
} from "../controllers/course.controller.js";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";

const router = Router();

// , isLoggedIn, authorizeRoles("ADMIN", "USER") - middlewares

router.get("/", getAllCourses);
router.post("/", isLoggedIn, authorizeRoles("ADMIN"), createCourse);
router.get("/:id", isLoggedIn, getLecturesByCourseId);

export default router;
