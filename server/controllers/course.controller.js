import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import Course from "../models/course.model.js";
import AppErr from "../utils/appErr.js";

/**
 * @ALL_COURSES
 * @ROUTE @GET {{URL}}/api/v1/course/all
 * @ACCESS Public
 */
export const getAllCourses = asyncHandler(async (_req, res, next) => {
  const courses = await Course.find({}).select("-lectures");

  if (!courses.length) {
    return next(new AppErr("No course found", 404));
  }

  res.status(200).json({
    success: true,
    message: "All courses",
    courses,
  });
});

/**
 * @CREATE_COURSE
 * @ROUTE @POST {{URL}}/api/v1/course/create
 * @ACCESS Private (admin only)
 */
export const createCourse = asyncHandler(async (req, res, next) => {
  const { title, description, category, createdBy } = req.body;

  if (!title || !description || !category || !createdBy) {
    return next(new AppErr("All fields are required", 400));
  }

  const course = await Course.create({
    title,
    description,
    category,
    createdBy,
    thumbnail: {
      public_id: "public_id",
      secure_url: "secure_url",
    },
  });

  if (!course) {
    return next(
      new AppErr("Course could not be created, please try again", 400)
    );
  }

  res.status(201).json({
    success: true,
    message: "Course created successfully",
    course,
  });
});
