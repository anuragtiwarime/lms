import fs from "fs/promises";

import cloudinary from "cloudinary";

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
    return next(new AppErr("Invalid course id or course not found.", 400));
  }

  res.status(200).json({
    success: true,
    message: "Course lectures fetched successfully",
    lectures: course.lectures,
  });
});

/**
 * @ADD_LECTURES
 * @ROUTE @POST {{URL}}/api/v1/courses/:id
 * @ACCESS Public
 */
export const addLecturesToCourseById = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;
  const { id } = req.params;

  let lectureData = {};

  // Array of lectures
  const lecture = req.file;

  if (!title || !description) {
    return next(new AppErr("Title and Description are required", 400));
  }

  lectureData.title = title;
  lectureData.description = description;

  const course = await Course.findById(id);

  if (!course) {
    return next(new AppErr("Invalid course id or course not found.", 400));
  }

  // Run only if user sends a file
  if (lecture) {
    try {
      const result = await cloudinary.v2.uploader.upload(lecture.path, {
        folder: "lms", // Save files in a folder named lms
      });

      // If success
      if (result) {
        let lecture = {};
        // Set the public_id and secure_url in array
        lecture.public_id = result.public_id;
        lecture.secure_url = result.secure_url;

        lectureData.lecture = lecture;
      }

      // After successful upload remove the file from local storage
      fs.rm(`uploads/${lecture.filename}`);
    } catch (error) {
      return next(
        new AppErr(error || "File not uploaded, please try again", 400)
      );
    }
  }

  console.log(lectureData);

  course.lectures.push(lectureData);

  // Save the course object
  await course.save();

  res.status(200).json({
    success: true,
    message: "Course lecture added successfully",
    course,
  });
});

// Remove lectures

// Update course

// Delete course
