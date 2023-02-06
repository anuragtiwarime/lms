import { Router } from "express";
import {
  addLectureToCourseById,
  createCourse,
  deleteCourseById,
  getAllCourses,
  getLecturesByCourseId,
  removeLectureFromCourse,
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
  authorizeRoles("ADMIN"),
  upload.single("lecture"),
  addLectureToCourseById
);
router.delete(
  "/",
  isLoggedIn,
  authorizeRoles("ADMIN"),
  removeLectureFromCourse
);
router.delete("/:id", isLoggedIn, authorizeRoles("ADMIN"), deleteCourseById);

export default router;
