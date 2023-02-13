import React from "react";
import Layout from "../../Layout/Layout";
import { BiRupee } from "react-icons/bi";

const Checkout = () => (
  <Layout>
    {/* checkout page container */}
    <div className="min-h-[90vh] flex items-center justify-center text-white">
      {/* checkout card */}
      <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
        <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
          Subscription Bundle
        </h1>

        <div className="px-4 space-y-5 text-center">
          <p className="text-[17px]">
            This purchase will allow you to access all the available courses of
            our platform for{" "}
            <span className="text-yellow-500 font-bold">1 Year Duration</span>.{" "}
            <br />
            All the existing and new launched courses will be available to you
            in this subscription bundle
          </p>

          <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
            <BiRupee /> <span>499</span>only
          </p>

          <div className="text-gray-200">
            <p>100% refund at cancellation</p>
            <p>* Terms & Condition Applied</p>
          </div>
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg">
          Buy Now
        </button>
      </div>
    </div>
  </Layout>
);

export default Checkout;
