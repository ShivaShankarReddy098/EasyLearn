import { Link, NavLink } from "react-router-dom";

const CATEGORIES = [
  {
    id: "1",
    name: "Web Development",
  },
  {
    id: "2",
    name: "Mobile Development",
  },
  {
    id: "3",
    name: "Data Science",
  },
  {
    id: "4",
    name: "Game Development",
  },
  {
    id: "5",
    name: "UI/UX Design",
  },
  {
    id: "6",
    name: "Communication",
  },
];
const WEBDEVELOPMENT = [
  {
    id: "1",
    name: "JavaScript",
  },
  {
    id: "2",
    name: "NextJS",
  },
  {
    id: "3",
    name: "Python",
  },
  {
    id: "4",
    name: "React",
  },
  {
    id: "5",
    name: "Angular",
  },
  {
    id: "6",
    name: "NodeJS",
  },
  {
    id: "7",
    name: "ExpressJS",
  },
];
const COURSES = [
  {
    id: "1",
    name: "JavaScript Full Course (2024)",
    link: "/Javascript.png",
    leature: "Shradha Khapra",
    rating: {
      num: "5.0",
      count: "328,000",
      stars: "⭐⭐⭐⭐⭐",
    },
    amount: "1599",
  },
  {
    id: "2",
    name: "JavaScript With Projects",
    link: "/Javascript2.png",
    leature: "Prashant Sir",
    rating: {
      num: "3.7",
      count: "128,000",
      stars: "⭐⭐⭐",
    },
    amount: "749",
  },
  {
    id: "3",
    name: "JavaScript Full Course",
    link: "/Javascript3.png",
    leature: "Edureka",
    rating: {
      num: "4.2",
      count: "118,000",
      stars: "⭐⭐⭐⭐",
    },
    amount: "899",
  },
  {
    id: "4",
    name: "NextJS In 7 Minutes",
    link: "/Javascript4.png",
    leature: "CodeWithHarry",
    rating: {
      num: "4.7",
      count: "228,000",
      stars: "⭐⭐⭐⭐",
    },
    amount: "949",
  },
  {
    id: "5",
    name: "ReactJS For Beginners",
    link: "/ReactJs.png",
    leature: "Shradha Khapra",
    rating: {
      num: "4.0",
      count: "38,000",
      stars: "⭐⭐⭐⭐",
    },
    amount: "601",
  },
  {
    id: "6",
    name: "Python In Hindi",
    link: "/Python.png",
    leature: "Chai aur Code",
    rating: {
      num: "4.7",
      count: "298,000",
      stars: "⭐⭐⭐⭐",
    },
    amount: "1200",
  },
  {
    id: "7",
    name: "AngularJs For Beginners",
    link: "/AngularJs.png",
    leature: "Programming With Mosh",
    rating: {
      num: "5.0",
      count: "98,000",
      stars: "⭐⭐⭐⭐⭐",
    },
    amount: "1359",
  },
  {
    id: "8",
    name: "NodeJS Crash Course",
    link: "/NodeJs.png",
    leature: "Envato Tuts+",
    rating: {
      num: "4.0",
      count: "111,059",
      stars: "⭐⭐⭐⭐",
    },
    amount: "1199",
  },
  {
    id: "9",
    name: "NodeJs And ExpressJs Course",
    link: "/ExpressJs.png",
    leature: "FreeCodeCamp.org",
    rating: {
      num: "5.0",
      count: "398,242",
      stars: "⭐⭐⭐⭐⭐",
    },
    amount: "1649",
  },
];
function Categories() {
  return (
    <>
      <div className=" p-10 lg:mt-10 mb-10 ">
        <div>
          <h1 className="font-bold text-3xl font-mono">
            All the skills you need in one place
          </h1>
          <p className=" font-mono">
            From critical skills to technical topics,EasyLearn supports your
            professional development.
          </p>
        </div>
        <div className="mt-10 border-b-2 border-b-gray-500 pb-1 ">
          <ul className="flex gap-5 font-bold">
            {CATEGORIES.map((course) => {
              return (
                <li
                  key={course.id}
                  className=" text-teal-500 hover:text-slate-800 first:text-slate-800 hover:-translate-y-1 transition-all"
                >
                  <NavLink className="" to={`/categories/${course.name}`}>
                    {course.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" bg-slate-100 font-mono px-5 pt-10 pb-10">
          <div className="pb-3">
            <ul className="flex gap-20">
              {WEBDEVELOPMENT.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="text-black p-4 bg-slate-300 first:text-white font-semibold rounded-3xl text-center first:bg-slate-600 hover:bg-slate-500"
                  >
                    <Link className=" ">{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt-2 ">
            <div className="grid grid-cols-3 p-8 gap-12 ">
              {COURSES.map((course) => {
                return (
                  <div
                    key={course.id}
                    className="hover:translate-y-3 transition-all"
                  >
                    <div>
                      <Link to={`/categories/${course.id}`}>
                        <img src={course.link} />
                      </Link>
                    </div>
                    <p className=" font-bold text-lg">{course.name}</p>
                    <p>{course.leature}</p>
                    <div className="flex gap-2">
                      <p className="font-semibold">{course.rating.num}</p>
                      <p>{course.rating.stars}</p>
                      <p>({course.rating.count})</p>
                    </div>
                    <p className="font-semibold">₹{course.amount}</p>
                    <button className=" bg-blue-400 hover:bg-blue-500 p-2 font-semibold text-white rounded-lg text-center text-sm mt-1">
                      ADD TO CART
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Categories;
