import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import CourseDescription from "./Pages/CourseDescription";
import CourseList from "./Pages/CourseList";
import NotFound from "./Pages/NotFound";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Checkout from "./Pages/Payment/Checkout";
import CheckoutSuccess from "./Pages/Payment/CheckoutSuccess";
import CheckoutFail from "./Pages/Payment/CheckoutFail";
import ForgetPassword from "./Pages/Password/ForgetPassword";
import ResetPassword from "./Pages/Password/ResetPassword";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/coursedescription" element={<CourseDescription />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkoutsuccess" element={<CheckoutSuccess />} />
        <Route path="/checkoutfail" element={<CheckoutFail />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
