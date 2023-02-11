import React from "react";
import Layout from "../../Layout/Layout";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <Layout>
      {/* container for checkout success card  */}
      <div className="min-h-[90vh] flex items-center justify-center text-white">
        {/* card to display message */}
        <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_white] rounded-lg relative">
          <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Payment Successful
          </h1>

          <div className="px-4 flex flex-col items-center justify-center space-y-2">
            <p className="text-center">
              Congrats to the pro bundle <br />
              Now you can enjoy the taste of learning from our vast library of
              courses from the top subject matter experts of the industry
            </p>

            {/* adding the check symbol */}
            <AiFillCheckCircle className="text-5xl text-green-500" />

            <p>Payment id : 123456789</p>
          </div>

          {/* adding back to homepage button */}
          <Link
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg"
            to={"/"}
          >
            <button>Go to Dashboard</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutSuccess;
