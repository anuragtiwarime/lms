import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { createNewCourse } from "../../Redux/courseSlice";

const CreateCourse = () => {
  const dispatch = useDispatch();

  // for storing the user input
  const [userInput, setUserInput] = useState({
    title: "",
    category: "",
    createdBy: "",
    description: "",
  });

  // function to handle user input
  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  };

  // function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //   checking for the empty fields
    if (
      !userInput.title ||
      !userInput.category ||
      !userInput.createdBy ||
      !userInput.description
    ) {
      toast.error("All fields are mandatory");
      return;
    }

    // calling the api
    const res = await dispatch(createNewCourse(userInput));

    // function to clear the input fields
    if (res?.payload?.success) {
      setUserInput({
        title: "",
        category: "",
        createdBy: "",
        description: "",
      });
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center h-[100vh]">
        {/* card for creating the new card */}
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center gap-10 rounded-lg p-4 text-white w-[700px] h-[450px] my-10 shadow-[0_0_10px_black] relative"
        >
          <Link
            to={"/admin/dashboard"}
            className="absolute top-8 text-2xl link text-accent cursor-pointer"
          >
            <AiOutlineArrowLeft />
          </Link>

          <h1 className="text-center text-2xl font-bold">
            Create New <span>Course</span>
          </h1>

          <main className="grid grid-cols-2 gap-x-10">
            {/* for course basic details */}
            <div className="space-y-5">
              {/* adding the title section */}
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="title">
                  Course Title
                </label>
                <input
                  required
                  type="name"
                  name="title"
                  id="title"
                  placeholder="Enter the course title"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.title}
                  onChange={handleUserInput}
                />
              </div>

              {/* adding the instructor */}
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="createdBy">
                  Instructor Name
                </label>
                <input
                  required
                  type="name"
                  name="createdBy"
                  id="createdBy"
                  placeholder="Enter the instructure name"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.createdBy}
                  onChange={handleUserInput}
                />
              </div>

              {/* adding the category */}
              <div className="flex flex-col gap-1">
                <label className="text-lg font-semibold" htmlFor="category">
                  Course Category
                </label>
                <input
                  required
                  type="name"
                  name="category"
                  id="category"
                  placeholder="Enter the category name"
                  className="bg-transparent px-2 py-1 border"
                  value={userInput.category}
                  onChange={handleUserInput}
                />
              </div>
            </div>

            {/* for course description and go to profile button */}

            {/* adding the course description */}
            <div className="flex flex-col gap-1">
              <label className="text-lg font-semibold" htmlFor="description">
                Course Description
              </label>
              <textarea
                required
                type="text"
                name="description"
                id="description"
                placeholder="Enter the course description"
                className="bg-transparent px-2 py-1 border h-52 resize-none"
                value={userInput.description}
                onChange={handleUserInput}
              />
            </div>
          </main>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Create Course
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateCourse;
