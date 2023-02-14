import React from "react";
import Layout from "../../Layout/Layout";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  plugins,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { FaUsers } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { FcSalesPerformance } from "react-icons/fc";
import { BsTrash } from "react-icons/bs";
import { MdOutlineModeEdit } from "react-icons/md";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const AdminDashboard = () => {
  const userData = {
    labels: ["Registered User", "Enrolled User"],
    datasets: [
      {
        label: "User Details",
        data: [25, 15],
        backgroundColor: ["yellow", "green"],
        borderColor: ["yellow", "green"],
        borderWidth: 1,
      },
    ],
  };

  const salesData = {
    labels: [
      "January",
      "Febraury",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    fontColor: "white",
    datasets: [
      {
        label: "Sales / Month",
        data: [25, 15],
        backgroundColor: ["rgb(255, 99, 132)"],
        borderColor: ["white"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <Layout>
      <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold text-yellow-500">
          Admin Dashboard
        </h1>

        {/* creating the records card and chart for sales and user details */}
        <div className="grid grid-cols-2 gap-5 m-auto mx-10">
          {/* displaying the users chart and data */}
          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
            {/* for displaying the pie chart */}
            <div className="w-80 h-80">
              <Pie data={userData} />
            </div>

            {/* card for user data */}
            <div className="grid grid-cols-2 gap-10">
              {/* card for registered users */}
              <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Registered User</p>
                  <h3 className="text-4xl font-bold">250</h3>
                </div>
                <FaUsers className="text-yellow-500 text-5xl" />
              </div>

              {/* card for enrolled users */}
              <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Enrolled User</p>
                  <h3 className="text-4xl font-bold">50</h3>
                </div>
                <FaUsers className="text-green-500 text-5xl" />
              </div>
            </div>
          </div>

          {/* displaying the sales chart and data */}
          <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
            {/* for displaying the bar chart */}
            <div className="h-80 relative w-full">
              <Bar className="absolute bottom-0 h-80 w-full" data={salesData} />
            </div>

            {/* card for user data */}
            <div className="grid grid-cols-2 gap-10">
              {/* card for registered users */}
              <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Total Sales</p>
                  <h3 className="text-4xl font-bold">100</h3>
                </div>
                <FcSalesPerformance className="text-yellow-500 text-5xl" />
              </div>

              {/* card for enrolled users */}
              <div className="flex items-center justify-between py-5 px-5 gap-5 rounded-md shadow-md">
                <div className="flex flex-col items-center">
                  <p className="font-semibold">Total Revenue</p>
                  <h3 className="text-4xl font-bold">49900</h3>
                </div>
                <GiMoneyStack className="text-green-500 text-5xl" />
              </div>
            </div>
          </div>
        </div>

        {/* CRUD courses section */}
        <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-center text-3xl font-semibold">
              Courses Overview
            </h1>

            {/* add course card */}
            <button className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer">
              Create New Course
            </button>
          </div>

          <table className="table w-full">
            <thead>
              <tr>
                <th>S No.</th>
                <th>Course Name</th>
                <th>Course Category</th>
                <th>Instructor</th>
                <th>Options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>01</td>
                <td>HTML5</td>
                <td>Web Development</td>
                <td>Vinay</td>
                <td className="flex items-center gap-4">
                  <button className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold">
                    <MdOutlineModeEdit />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold">
                    <BsTrash />
                  </button>
                </td>
              </tr>

              <tr>
                <td>01</td>
                <td>HTML5</td>
                <td>Web Development</td>
                <td>Vinay</td>
                <td className="flex items-center gap-4">
                  <button className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold">
                    <MdOutlineModeEdit />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-30 text-xl py-2 px-4 rounded-md font-bold">
                    <BsTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
