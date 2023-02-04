import React from "react";
import CourseCard from "../Components/CourseCard";
import Layout from "../Layout/Layout";

const Courses = () => {
  return (
    <Layout>
      {/* for displaying all the courses */}
      <div>
        <CourseCard />
      </div>
    </Layout>
  );
};

export default Courses;
