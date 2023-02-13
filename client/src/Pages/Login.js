import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className="flex items-center justify-center h-[100vh]">
        <form className="flex flex-col justify-center gap-4 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Login Page</h1>
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

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Login
          </button>

          <Link to={"/forgetpassword"}>
            <p className="text-center link text-accent cursor-pointer">
              Forget Password
            </p>
          </Link>

          <p className="text-center">
            Don't have an account ?{" "}
            <Link to={"/signup"} className="link text-accent cursor-pointer">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
