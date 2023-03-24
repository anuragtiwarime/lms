import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
import { getCourseLecture } from "../../Redux/lectureSlice";

const DisplayLectures = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for getting the data from location of previous component
  const courseDetails = useLocation().state;
  const { lectures } = useSelector((state) => state.lecture);
  const { role } = useSelector((state) => state.auth);
  console.log(lectures, courseDetails, role);

  // to play the video accordingly
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // fetching the course lecture data
  useEffect(() => {
    // (async () => {
    //   await dispatch(getCourseLecture(courseDetails._id));
    // })();
  }, []);
  return (
    <Layout>
      <div className="flex flex-col gap-10 items-center justify-center h-[90vh] text-white mx-[5%]">
        {/* displaying the course name */}

        <h1 className="text-center text-2xl font-semibold text-yellow-500">
          Course Name : {courseDetails?.title}
        </h1>

        <div className="flex justify-center gap-10 w-full">
          {/* left section for playing the video and displaying course details to admin */}
          <div className="space-y-5 w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black]">
            <video
              className="object-fill rounded-tl-lg rounded-tr-lg w-full"
              src={lectures[currentVideoIndex].lecture.secure_url}
              controls
              disablePictureInPicture
              muted
              controlsList="nodownload"
            ></video>
            <div>
              <h1>
                <span className="text-yellow-500">Title : </span>
                {lectures[currentVideoIndex]?.title}
              </h1>
              <p>
                {" "}
                <span className="text-yellow-500 line-clamp-4">
                  Description :{" "}
                </span>
                {lectures[currentVideoIndex]?.description}
              </p>
            </div>
          </div>

          {/* right section for displaying all the lectures of the course */}
          <ul className="overflow-y-scroll w-[28rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4">
            <li className="text-center font-semibold text-xl text-yellow-500">
              Lectures List
            </li>
            {lectures.map((element, index) => {
              return (
                <li className="space-y-2" key={element._id}>
                  <p
                    className="cursor-pointer"
                    onClick={() => setCurrentVideoIndex(index)}
                  >
                    <span className="text-yellow-500">
                      {" "}
                      Lecture {index + 1} :{" "}
                    </span>
                    {element?.title}
                  </p>
                  {role === "ADMIN" && (
                    <button className="btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                      Delete Lecture
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default DisplayLectures;
