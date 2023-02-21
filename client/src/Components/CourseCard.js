import React from "react";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <Link to={"/course/description"}>
      <div className="text-white w-80 shadow-lg rounded-lg cursor-pointer group overflow-hidden bg-zinc-700">
        <div className="overflow-hidden">
          <img
            className="rounded-tl-lg rounded-tr-lg  group-hover:scale-[1.2]  transition-all ease-in-out duration-300 "
            src="https://static-cse.canva.com/blob/999484/1600w-K9NTgBT1uG8.jpg"
            alt="course thumbnail"
          />
        </div>

        {/* course details */}
        <div className="p-3 space-y-1 text-white">
          <h2 className="text-2xl font-bold text-yellow-500">Contact App</h2>
          <p className="line-clamp-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            repellendus officia est quod eveniet debitis nostrum dicta
            laboriosam suscipit nisi.
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Category : </span>Web
            Development
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Total Lectures : </span>
            20
          </p>
          <p className="font-semibold">
            <span className="text-yellow-500 font-bold">Instructor : </span>
            Harvi
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
