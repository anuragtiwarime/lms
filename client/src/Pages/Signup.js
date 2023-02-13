import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className="flex items-center justify-center h-[100vh]">
        <form className="flex flex-col justify-center gap-4 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Registration Page</h1>

          {/* input for name */}
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="email">
              Name
            </label>
            <input
              required
              type="name"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="bg-transparent px-2 py-1 border"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          {/* input for email */}
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent px-2 py-1 border"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          {/* input for password */}
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="password">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="bg-transparent px-2 py-1 border"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {/* registration button */}
          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Create Account
          </button>

          <p className="text-center">
            Already have an account ?{" "}
            <Link to={"/login"} className="link text-accent cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
