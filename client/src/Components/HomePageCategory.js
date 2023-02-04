import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { ImDatabase } from "react-icons/im";

const HomePageCategory = ({ iconName }) => {
  return (
    <div className="w-60 py-8 flex flex-col items-center justify-center gap-2 rounded-md bg-gray-800 text-white shadow-[0_0_10px_white] cursor-pointer transition-all ease-in-out duration-300 hover:-translate-y-4">
      {/* displaying icon, according to the icon name */}
      {iconName === "MdOutlineWeb" && (
        <>
          <MdOutlineWeb
            size={"100px"}
            className="rounded-full p-6 bg-gray-600 "
          />
          <h3 className="text-xl font-bold">Web Development</h3>
        </>
      )}

      {iconName === "MdDeveloperMode" && (
        <>
          <MdDeveloperMode
            size={"100px"}
            className="rounded-full p-6 bg-gray-600 "
          />
          <h3 className="text-xl font-bold">App Development</h3>
        </>
      )}

      {iconName === "ImDatabase" && (
        <>
          <ImDatabase
            size={"100px"}
            className="rounded-full p-6 bg-gray-600 "
          />
          <h3 className="text-xl font-bold">Data Science</h3>
        </>
      )}
    </div>
  );
};

export default HomePageCategory;
