import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from "react-icons/bs"

const Layout = ({ children }) => {
  // for checking user logged in or not
  const [isLoggedin, setIsLoggedin] = useState(false);

  // function to log out the user
  const logout = () => {
    console.log("Logout Successfully");
  };

  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
  };

  return (
    <>
      <div className="drawer absolute left-0 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="cursor-pointer fixed top-2 left-2"
          >
            <FiMenu size={"32px"} className="font-bold text-white" />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative">
            {/* close button for drawer */}
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>

            <li>
              <Link to={"/"}>Home</Link>
            </li>

            {/* displaying dashboard, if user is logged in */}
            {isLoggedin && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}

            <li>
              <Link to={"/courses"}>All Courses</Link>
            </li>

            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>

            <li>
              <Link to={"/about"}>About Us</Link>
            </li>

            {/* creating the bottom part of drawer */}
            {/* if user is not logged in */}
            {!isLoggedin && (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to={"/login"}>Login</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to={"/signup"}>Signup</Link>
                  </button>
                </div>
              </li>
            )}

            {/* if user is logged in */}
            {isLoggedin && (
              <li className="absolute bottom-4 w-[90%]">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-4 py-1 font-semibold rounded-md w-full">
                    <Link to={"/profile"}>Profile</Link>
                  </button>
                  <button className="btn-secondary px-4 py-1 font-semibold rounded-md w-full">
                    <Link onClick={logout}>Logout</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>

      {children}

      {/* adding the footer */}
      <footer className="relative bottom-0 py-5 flex flex-col sm:flex-row items-center justify-between sm:px-20 text-white bg-gray-800">
        {/* adding copyright section */}
        <section className="text-lg">
          Copyright 2023 | All Rights Reserved
        </section>

        {/* adding the social media section */}
        <section className="flex items-center justify-center gap-5 text-2xl text-white">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href="#"><BsFacebook /></a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href="#"><BsInstagram /></a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href="#"><BsTwitter /></a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300" href="#"><BsLinkedin/></a>
        </section>
      </footer>
    </>
  );
};

export default Layout;
