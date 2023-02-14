import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center h-[100vh]">
        <form className="flex flex-col items-center justify-center gap-5 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[22rem]">
          <h1 className="text-3xl font-semibold">
            Contact Form
          </h1>
          <div className="flex flex-col w-full gap-2">
            <label className="text-xl font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="bg-transparent border px-2 py-1 rounded-sm"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="bg-transparent border px-2 py-1 rounded-sm"
              id="email"
              type="email"
              placeholder="Enter the email"
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-xl font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
              name="message"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
