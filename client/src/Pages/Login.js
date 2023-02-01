import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <div className="flex items-center justify-center h-[100vh]">
        <form
          className="flex flex-col justify-center gap-4 rounded-sm p-4 text-white w-80 h-[26rem]"
          style={{ boxShadow: "1px 1px 3px 3px white" }}
        >
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
            className="w-full btn-primary py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Login
          </button>

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
