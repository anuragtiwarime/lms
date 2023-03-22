import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { addCourseLecture } from "../../Redux/lectureSlice";

const Lectures = () => {
  const courseDetails = useLocation().state;
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useState({
    id: courseDetails?._id,
    lecture: undefined,
    title: "",
    description: "",
    videoSrc: "",
  });

  // function to handle the input box change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  // function to get video and its link from the input
  const getVideo = (event) => {
    const video = event.target.files[0];
    const source = window.URL.createObjectURL(video);
    setUserInput({ ...userInput, videoSrc: source, lecture: video });
  };

  // function to handle the form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(userInput);
    // checking for the empty fields
    if (!userInput.lecture || !userInput.title || !userInput.description) {
      toast.error("All fields are mandatory");
      return;
    }

    const res = await dispatch(addCourseLecture(userInput));
    console.log(res);
  };
  return (
    <Layout>
      <div className="pt-10 text-white flex flex-col items-center justify-center gap-10 mx-16 min-h-[90vh]">
        <form onSubmit={handleFormSubmit}>
          <input
            type="file"
            name="lecture"
            onChange={getVideo}
            accept="video/mp4,video/x-m4v,video/*"
          />
          <input
            type="text"
            name="title"
            value={userInput.title}
            onChange={handleInputChange}
            placeholder="Enter the title for lecture"
          />
          <input
            type="text"
            name="description"
            value={userInput.description}
            onChange={handleInputChange}
            placeholder="Enter the description for lecture"
          />
          <video
            src={userInput.videoSrc}
            muted
            autoPlay
            controls
            controlsList="nodownload disablePictureInPicture nofullscreen"
          ></video>
          <button>Add Lecture</button>
        </form>
      </div>
    </Layout>
  );
};

export default Lectures;
