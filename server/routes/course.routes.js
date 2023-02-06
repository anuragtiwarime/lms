import { Router } from "express";
import {
  addLectureToCourseById,
  createCourse,
  deleteCourseById,
  getAllCourses,
  getLecturesByCourseId,
  removeLectureFromCourse,
  updateCourseById,
} from "../controllers/course.controller.js";
import { authorizeRoles, isLoggedIn } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

// , isLoggedIn, authorizeRoles("ADMIN", "USER") - middlewares

// router.get("/", getAllCourses);
// router.post("/", isLoggedIn, authorizeRoles("ADMIN"), createCourse);
// router.delete(
//   "/",
//   isLoggedIn,
//   authorizeRoles("ADMIN"),
//   removeLectureFromCourse
// );
// router.get("/:id", isLoggedIn, getLecturesByCourseId);
// router.post(
//   "/:id",
//   isLoggedIn,
//   authorizeRoles("ADMIN"),
//   upload.single("lecture"),
//   addLectureToCourseById
// );
// router.delete("/:id", isLoggedIn, authorizeRoles("ADMIN"), deleteCourseById);

router
  .route("/")
  .get(getAllCourses)
  .post(isLoggedIn, authorizeRoles("ADMIN"), createCourse)
  .delete(isLoggedIn, authorizeRoles("ADMIN"), removeLectureFromCourse);
router
  .route("/:id")
  .get(isLoggedIn, getLecturesByCourseId)
  .post(
    isLoggedIn,
    authorizeRoles("ADMIN"),
    upload.single("lecture"),
    addLectureToCourseById
  )
  .update(isLoggedIn, authorizeRoles("ADMIN"), updateCourseById)
  .delete(isLoggedIn, authorizeRoles("ADMIN"), deleteCourseById);

export default router;
