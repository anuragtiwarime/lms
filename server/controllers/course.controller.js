import asyncHandler from "../middlewares/asyncHandler.middleware.js";
import Course from "../models/course.model.js";
import AppErr from "../utils/appErr.js";

/**
 * @ALL_COURSES
 * @ROUTE @GET {{URL}}/api/v1/courses
 * @ACCESS Public
 */
export const getAllCourses = asyncHandler(async (_req, res, next) => {
  // Find all the courses without lectures
  const courses = await Course.find({}).select("-lectures");

  // If no courses send the same
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
 * @ROUTE @POST {{URL}}/api/v1/courses
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

/**
 * @GET_LECTURES_BY_COURSE_ID
 * @ROUTE @POST {{URL}}/api/v1/courses/:id
 * @ACCESS Public
 */
export const getLecturesByCourseId = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const course = await Course.findById(id);

  if (!course) {
    return next(new AppErr("Course not found", 404));
  }

  res.status(200).json({
    success: true,
    message: "Course fetched successfully",
    lectures: course.lectures,
  });
});

// Add lectures

// Remove lectures

// Update course

// Delete course
