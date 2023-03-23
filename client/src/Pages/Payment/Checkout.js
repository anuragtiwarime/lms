import React, { useEffect } from "react";
import Layout from "../../Layout/Layout";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  getRazorPayId,
  purchaseCourseBundle,
  verifyUserPayment,
} from "../../Redux/razorpaySlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const razorPayKey = useSelector((state) => state.razorpay.key);
  const subscription_id = useSelector(
    (state) => state.razorpay.subscription_id
  );
  const userData = useSelector((state) => state.auth.data);

  // for storing the payment details after successfull transaction
  const paymentDetails = {
    razorpay_payment_id: "",
    razorpay_subscription_id: "",
    razorpay_signature: "",
  };
  // console.log(userData);

  // object for razor pay
  // const options = {
  //   key: "",
  //   subscription_id: "",
  //   name: "",
  //   description: "",
  //   image: "",
  //   handler: (response) => { },
  //   prefill: {},
  //   notes: {},
  //   theme:{}
  // }

  // function for razor pay script
  // const loadScript = (src) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // };

  const handleSubscription = async (event) => {
    event.preventDefault();

    // checking for empty payment credential
    if (!razorPayKey || !subscription_id) {
      return;
    }

    const options = {
      key: razorPayKey,
      subscription_id: subscription_id,
      name: "Coursify Pvt. Ltd.",
      description: "Monthly Subscription",
      //  "image": "",
      handler: async function (response) {
        paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
        paymentDetails.razorpay_subscription_id =
          response.razorpay_subscription_id;
        paymentDetails.razorpay_signature = response.razorpay_signature;
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_subscription_id);
        console.log(response.razorpay_signature);

        // displaying the success message
        toast.success("Payment Successfull");

        // verifying the payment
        const res = await dispatch(verifyUserPayment(paymentDetails));
        console.log(res);

        // moving to success page
        navigate("/checkout/success", { state: { ...paymentDetails } });
      },
      prefill: {
        name: userData.fullName,
        email: userData.email,
        // contact: "+919876543210",
      },
      // notes: {
      //   note_key_1: "Tea. Earl Grey. Hot",
      //   note_key_2: "Make it so.",
      // },
      theme: {
        color: "#F37254",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  useEffect(() => {
    (async () => {
      await dispatch(getRazorPayId());
      await dispatch(purchaseCourseBundle());
    })();
    // loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);
  console.log(razorPayKey, subscription_id);
  return (
    <Layout>
      {/* checkout page container */}
      <form
        onSubmit={handleSubscription}
        className="min-h-[90vh] flex items-center justify-center text-white"
      >
        {/* checkout card */}
        <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
          <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
            Subscription Bundle
          </h1>

          <div className="px-4 space-y-5 text-center">
            <p className="text-[17px]">
              This purchase will allow you to access all the available courses
              of our platform for{" "}
              <span className="text-yellow-500 font-bold">1 Year Duration</span>
              . <br />
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

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full text-center py-2 text-xl font-bold rounded-bl-lg rounded-br-lg"
          >
            Buy Now
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Checkout;
