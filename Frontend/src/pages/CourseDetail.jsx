// import categories from "coursesData/categories";
// import { useParams } from "react-router-dom";
// import categories from "../../coursesData/categories";

import CourseContent from "./CourseContent";

// import { log } from "console";
function CourseDetail() {
  //Take id from params
  // var id = window.location.search.split("=")[1];
  //   const { id } = useParams();
  //   console.log(id);
  //Get course from database
  //   var course = categories.map((course) =>
  //     course.courses.map((item) =>
  //       item.find(function (item) {
  //         return item.id == id;
  //       })
  //     )
  //   );

  return (
    <>
      <div className="mt-11">
        <div className="bg-slate-800 p-20">
          <div className="w-[65%]">
            <h1 className="text-white font-mono font-bold text-4xl">
              JavaScript Full Course (2024)
            </h1>
            <p className="text-white font-mono text-xl mt-3">
              Comprehensive JavaScript Tutorial with Notes, Projects, and
              Practice Questions for Beginners to Pro in 2024
            </p>
            <div className="font-mono mt-8 flex gap-2 ">
              <p className="text-lg text-yellow-300">5.0</p>
              <p className="text-sm mt-1 ">⭐⭐⭐⭐⭐</p>
              <p>
                <a
                  href="#"
                  className="text-blue-500 hover:border-b border-blue-500 "
                >
                  (328,000 ratings)
                </a>
              </p>
            </div>
            <p className="text-white mt-5">
              Created by{" "}
              <a href="#" className="text-blue-500">
                Apna College
              </a>
            </p>
            <div className="flex gap-5 text-white mt-5">
              <p>Last updated 02/2024</p>
              <p>Language:Hindi</p>
            </div>
          </div>
        </div>
        <div className="border-white border-[1px] h-[870px] z-40 absolute top-40 right-[110px] w-[25%] bg-white">
          <img src="/Javascript.png" alt="apnaCollge" />
          <div className=" pl-[60px] flex gap-20 pt-5 font-semibold border-black border-b-2 pb-2">
            <p className="">
              <a href="">Personal</a>
            </p>
            <p className="text-blue-400 hover:text-black">
              <a href="">Teams</a>
            </p>
          </div>
          <p className="pl-5 pt-5 text-xl font-bold">
            Subscribe to EasyLearn&apos;s top courses
          </p>
          <p className="pl-5 pt-2 text-[14px]">
            Get this course, plus 11,000+ of our top-rated courses, with
            Personal Plan.
            <a
              href=""
              className="text-blue-500 pl-2 hover:text-blue-700 font-semibold"
            >
              Learn more
            </a>
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-lg text-white font-semibold p-4 rounded-xl w-[90%] mt-5 ml-[15px]">
            Start subscription
          </button>
          <div className="flex flex-col justify-center items-center text-slate-500 mt-2 mb-2">
            <p>Starting at ₹450 per month</p>
            <p>Cancle anytime</p>
          </div>
          <hr />
          <h2 className="font-bold text-2xl p-5">₹1599</h2>
          <button className="p-4 ml-3 bg-slate-300 hover:bg-slate-400  rounded-lg w-[90%] mb-2 text-lg font-semibold  ">
            Add to cart
          </button>
          <div className="text-[12px] p-3 flex gap-4 font-medium">
            <p>30-Day Money-Back Guarantee</p>
            <p>Full Lifetime Access</p>
          </div>
          <div className="flex justify-around text-blue-500 hover:text-blue-700 mb-3">
            <p className=" hover:border-b-[2px] hover:border-blue-700">
              <a href="">Share</a>
            </p>
            <p className="hover:border-b-[2px] hover:border-blue-700">
              <a href="">Gift this course</a>
            </p>
            <p className="hover:border-b-[2px] hover:border-blue-700">
              <a href="">Apply Coupon</a>
            </p>
          </div>
          <div className="border-slate-400 border-dotted border-2 p-1 m-1">
            <div className="flex gap-20">
              <p className="text-slate-600">
                KEEPLEARNING <span className="text-slate-400">is applied</span>
              </p>
              <p className="mt-2">❌</p>
            </div>
            <p className="text-slate-500">EasyLearn coupon</p>
          </div>
          <div className="m-1 flex mt-5 justify-center items-center">
            <input
              type="text"
              placeholder="Enter Coupon"
              className="border-slate-500 border-2 outline-none bg-slate-300 rounded-tl-lg rounded-bl-lg "
            />
            <p>
              <a
                href=""
                className="text-white font-semibold bg-slate-600 p-2 rounded-tr-lg rounded-br-lg hover:bg-slate-700"
              >
                Apply
              </a>
            </p>
          </div>
        </div>
        <div className="bg-slate-300">
          <div className="pt-8 pl-20 border-slate-300 border-2">
            <div className="border-slate-100 p-4 border w-[60%] rounded-lg">
              <h2 className="font-bold text-2xl mb-2">
                What you&apos;ll learn
              </h2>
              <div className="grid grid-cols-2  gap-2 text-slate-700 text-[15px] font-semibold">
                <p>
                  ➡️Become an advanced, confident, and modern JavaScript
                  developer from scratch
                </p>
                <p>
                  ➡️Build 6 beautiful real-world projects for your portfolio
                  (not boring toy apps)
                </p>
                <p>
                  ➡️Become job-ready by understanding how JavaScript really
                  works behind the scenes
                </p>
                <p>
                  ➡️How to think and work like a developer: problem-solving,
                  researching, workflows
                </p>
                <p>
                  ➡️JavaScript fundamentals: variables, if/else, operators,
                  boolean logic, functions, arrays, objects, loops, strings,
                  etc.
                </p>
                <p>
                  ➡️Modern ES6+ from the beginning: arrow functions,
                  destructuring, spread operator, optional chaining (ES2020),
                  etc.
                </p>
                <p>
                  ➡️Modern OOP: Classes, constructors, prototypal inheritance,
                  encapsulation, etc.
                </p>
                <p>
                  ➡️Complex concepts like the this keyword, higher-order
                  functions, closures, etc.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 pl-24 w-[60%] pb-10">
            <h1 className="font-bold text-3xl mb-2">This course includes:</h1>
            <div className="grid grid-cols-2 gap-3 text-[18px] font-medium">
              <p>⭐ 12 hours on-demand video</p>
              <p>⭐ Access on mobile and TV</p>
              <p>⭐ 8 coding exercises</p>
              <p>⭐ Full lifetime access</p>
              <p>⭐ 23 articles</p>
              <p>⭐ Certificate of completion</p>
            </div>
          </div>
          <div className="mt-1 pl-24 w-[60%] pb-4 ">
            <div className="border-2 border-gray-600 p-1 rounded-lg">
              <h1 className="font-bold">
                Top companies offer this course to their employees
              </h1>
              <p className="font-semibold text-slate-700">
                This course was selected for our collection of top-rated courses
                trusted by businesses worldwide.
                <span>
                  <a
                    href=""
                    className="text-blue-600 hover:border-b-2 hover:border-blue-700"
                  >
                    Learn more
                  </a>
                </span>
              </p>
              <div className="grid grid-cols-4">
                <img src="/Amazon.png" className="w-1/2" />
                <img src="/Apple-removebg-preview.png" className="w-1/2" />
                <img src="/BMW-removebg-preview.png" className="w-1/2" />
                <img src="/Rolex-removebg-preview.png" className="w-1/2" />
              </div>
            </div>
          </div>
          <div className="pl-24 mt-5 pb-10">
            <p className="text-3xl font-bold">Course content</p>
            <p className="text-slate-600 ">
              11 sections * 121 lectures * 12h 34m total length
            </p>
            <div>
              <CourseContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CourseDetail;
