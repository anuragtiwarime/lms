import React, { useEffect } from "react";
import Layout from "../Layout/Layout";

const CourseDescription = () => {
  useEffect(() => {
    // scroll to the top on page render
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      {/* wrapper for course description */}
      <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
        {/* displaying the course details */}
        <div className="grid grid-cols-2 gap-10 py-10 relative">
          {/* creating the left side of description box */}
          <div className="space-y-5">
            <img
              src="https://static-cse.canva.com/blob/999484/1600w-K9NTgBT1uG8.jpg"
              alt="thumbnail"
            />

            {/* course details */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xl">
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Total Lectures :{" "}
                  </span>
                  20
                </p>
                <p className="font-semibold">
                  <span className="text-yellow-500 font-bold">
                    Instructor :{" "}
                  </span>
                  Harvi
                </p>
              </div>

              {/* adding the subscribe button */}
              <button className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
                Subscribe to Course
              </button>
            </div>
          </div>

          {/* creating the right section of description box */}
          <div className="space-y-2 text-xl">
            <h1 className="text-4xl font-bold text-yellow-500 text-center mb-4">
              Contact App
            </h1>

            <p className="text-yellow-500 font-bold">Course Description :</p>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              repellendus officia est quod eveniet debitis nostrum dicta
              laboriosam suscipit nisi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Porro nihil accusamus unde reprehenderit amet
              animi totam sapiente? Eius, explicabo! Rerum, enim soluta pariatur
              dolores exercitationem iste culpa incidunt velit voluptatibus rem
              unde. Praesentium ipsum cupiditate voluptate in! Consequuntur
              iusto illum debitis expedita, similique deleniti soluta ipsum iure
              culpa velit! Corporis quam odio debitis odit maxime quo hic dolor
              fuga temporibus. Possimus, qui ab dignissimos accusamus ipsa vel
              nostrum laborum soluta necessitatibus dolorem sapiente asperiores
              quibusdam debitis harum error accusantium quo magnam tempore
              earum! Laboriosam ratione quia fuga praesentium deserunt ex
              maiores ipsum quasi laudantium vero maxime aperiam distinctio
              quidem eos tempora, molestiae iure cumque pariatur veniam officiis
              alias. Qui fuga fugit facilis repellendus voluptates illum fugiat
              sapiente et expedita impedit aliquam facere cumque quod nobis amet
              deleniti minima suscipit provident, quis quia molestias magnam!
              Quisquam asperiores nemo, a consequatur facere amet, itaque quidem
              nobis excepturi rem enim. Cupiditate harum natus tenetur
              asperiores maxime blanditiis error possimus. Ab debitis adipisci
              quo nam doloremque quod cum fugiat quas sunt excepturi pariatur
              eligendi, saepe optio recusandae rerum quos voluptate. Esse
              quibusdam quo, praesentium fugit laborum, officia animi facilis in
              nesciunt voluptatum, consequatur aperiam facere rerum repudiandae
              non eveniet provident blanditiis reprehenderit sunt iure?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDescription;
