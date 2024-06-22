function Footer() {
  return (
    <>
      <footer className=" p-4">
        <div className="flex  justify-around gap-10">
          <div className=" mt-5">
            <h2 className=" text-white font-bold">
              Top Companies Choose{" "}
              <span className=" text-blue-400 font-sans font-extrabold text-2xl ">
                EasyLearn Business
              </span>{" "}
              To Build In-Demand Career Skills
            </h2>
          </div>
          <div>
            <img src="/Footer_Companies.png" />
          </div>
        </div>
        <div className=" mt-4 p-10 text-justify text-white font-semibold">
          <ul className="flex  justify-center text-center gap-7 ">
            <li>
              <a href="#">EasyLearn Business</a>
            </li>
            <li>
              <a href="#">Get the app</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help and Support</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cookie setting</a>
            </li>
          </ul>
        </div>
        <div className=" flex text-white font-semibold">
          <div className=" flex justify-items-start  w-20">
            <img src="/EasyLearn_logo_Main.png" />
            {/* <h1>EasyLearn</h1> */}
          </div>
          <div className=" flex  ml-96 ">
            <h3 className="text-xl ">
              Copyright &copy;EasyLearn,2025.All right reserved
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
