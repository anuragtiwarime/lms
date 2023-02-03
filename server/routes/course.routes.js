import { Router } from "express";
import {
  addLecturesToCourseById,
  createCourse,
  getAllCourses,
  getLecturesByCourseId,
} from "../controllers/course.controller.js";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

// , isLoggedIn, authorizeRoles("ADMIN", "USER") - middlewares

router.get("/", getAllCourses);
router.post("/", isLoggedIn, authorizeRoles("ADMIN"), createCourse);
router.get("/:id", isLoggedIn, getLecturesByCourseId);
router.post(
  "/:id",
  isLoggedIn,
  // authorizeRoles("ADMIN"),
  upload.single("lecture"),
  addLecturesToCourseById
);

export default router;
