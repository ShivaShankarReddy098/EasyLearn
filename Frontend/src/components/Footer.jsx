function Footer() {
  return (
    <>
      <footer className=" p-4  max-sm:p-2 max-sm:flex max-sm:flex-col max-sm:text-center max-sm:justify-center">
        <div className="flex  justify-around gap-10 max-sm:flex max-sm:flex-col">
          <div className=" mt-5">
            <h2 className=" text-white font-bold max-sm:font-semibold">
              Top Companies Choose{" "}
              <span className=" text-blue-400 font-sans font-extrabold text-2xl max-sm:font-semibold max-sm:text-blue-300 ">
                EasyLearn Business
              </span>{" "}
              To Build In-Demand Career Skills
            </h2>
          </div>
          <div>
            <img src="/Footer_Companies.png" />
          </div>
        </div>
        <div className=" mt-4 p-10 text-justify text-white font-semibold font-mono">
          <ul className="flex justify-center text-center gap-7 max-sm:grid max-sm:grid-cols-2 max-sm:gap-2 ">
            <li>
              <a href="#" className="hover:text-blue-300">
                EasyLearn Business
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Get the app
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Careers
              </a>
            </li>
            <li>
              <a href="# " className="hover:text-blue-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Help and Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Cookie setting
              </a>
            </li>
          </ul>
        </div>
        <div className=" text-white font-semibold">
          <div className="w-20 flex text-center  justify-around gap-3 max-sm:gap-1">
            <img
              src="/EasyLearn_logo_Main.png"
              className="max-sm:w-[50%] max-sm:h-[50%]"
            />
            <h2 className="font-mono font-bold text-xl mt-10 max-sm:mt-4 max-sm:font-semibold max-sm:text-lg">
              EasyLearn
            </h2>
            {/* <h1>EasyLearn</h1> */}
          </div>
          <div>
            <h3 className="text-xl  font-mono font-bold max-sm:text-sm">
              Copyright &copy;EasyLearn,2025.All right reserved
            </h3>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
