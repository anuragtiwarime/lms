import React from "react";
import Layout from "../Layout/Layout";
import homePageMainImage from "../Assets/Images/homePageMainImage.png"

const homepage = () => {
  return (
    <Layout>
      <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16">
        {/* for platform details */}
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
            Find out best <span className="text-yellow-500 font-bold">Online Courses</span>
          </h1>
          <p className="text-xl text-gray-200">
            We have a large library of courses taught by highly skilled and
            qualified faculities at a very affordable cost.
          </p>

          {/* for buttons */}
          <div className="space-x-6">
            <button className="bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer">Explore Courses</button>
            <button className="border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer">Contact Us</button>
          </div>
        </div>

        {/* right section for image */}
        <div className="w-1/2 flex items-center justify-center">
          <img src={homePageMainImage} alt="home page image" />
        </div>
      </div>

      <div className="ml-16">
        <h1>Most Popular <span className="text-yellow-500 font-bold">Category</span> </h1>

        {/* creating the cards */}
      </div>
    </Layout>
  );
};

export default homepage;
