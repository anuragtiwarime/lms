import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Layout/Layout";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  return (
    <Layout>
      {/* forget password container */}
      <div className="flex items-center justify-center h-[100vh]">
        {/* forget password card */}
        <form className="flex flex-col justify-center gap-6 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Reset Password</h1>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="email">
              New Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your new password"
              className="bg-transparent px-2 py-1 border"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="cnfPassword">
              Confirm New Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="cnfPassword"
              placeholder="Confirm your new password"
              className="bg-transparent px-2 py-1 border"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ResetPassword;
