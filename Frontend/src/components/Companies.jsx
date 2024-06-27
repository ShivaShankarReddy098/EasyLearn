import "flowbite";
function Companies() {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full  bg-slate-100 rounded-2xl"
        data-carousel="slide"
      >
        <h1 className=" font-mono text-center pt-2">
          Trusted by over 12,000 companies and millions of learners around the
          world
        </h1>
        <div className="relative overflow-hidden rounded-lg md:h-40">
          <div
            className="flex flex-row duration-500 ease transition-all"
            data-carousel-item
          >
            <img
              src="Apple-removebg-preview.png"
              className=" w-1/4  p-2 "
              alt="..."
            />
            <img src="Amazon.png" className="w-1/4 p-2 " alt="..." />
            <img
              src="Audi-removebg-preview.png"
              className="w-1/4 p-2 "
              alt="..."
            />
            <img
              src="BMW-removebg-preview.png"
              className=" w-1/4 p-2 "
              alt="..."
            />
          </div>
          <div
            className="flex flex-row duration-500 ease transition-all"
            data-carousel-item
          >
            <img
              src="CocaCola-removebg-preview.png"
              className="w-1/4 p-2"
              alt="..."
            />
            <img
              src="Ford-removebg-preview.png"
              className=" w-1/4 p-2"
              alt="..."
            />
            <img
              src="IBM-removebg-preview.png"
              className="block w-1/4 p-2 "
              alt="..."
            />
            <img
              src="Lego-removebg-preview.png"
              className="  block  w-1/4 p-2 "
              alt="..."
            />
          </div>
          <div
            className="flex flex-row duration-500 ease transition-all"
            data-carousel-item
          >
            <img
              src="MasterCard-removebg-preview.png"
              className="w-1/4 p-2"
              alt="..."
            />
            <img
              src="McDonald_s-removebg-preview.png"
              className=" w-1/4 p-2"
              alt="..."
            />
            <img
              src="Michelin-removebg-preview.png"
              className="block w-1/4 p-2 "
              alt="..."
            />
            <img
              src="Microsoft-removebg-preview.png"
              className="  block  w-1/4 p-2 "
              alt="..."
            />
          </div>
          <div
            className="flex flex-row duration-500 ease transition-all"
            data-carousel-item
          >
            <img
              src="Nasa-removebg-preview.png"
              className="w-1/4 p-2"
              alt="..."
            />
            <img
              src="Nike-removebg-preview.png"
              className=" w-1/4 p-2"
              alt="..."
            />
            <img
              src="Pepsi-removebg-preview.png"
              className="block w-1/4 p-2 "
              alt="..."
            />
            <img
              src="Rolex-removebg-preview.png"
              className="  block  w-1/4 p-2 "
              alt="..."
            />
          </div>
          {/* <div
            className="flex flex-row duration-500 ease transition-all"
            data-carousel-item
          >
            <img src="Nike.png" className="w-1/4 p-2" alt="..." />
            <img src="Apple.png" className=" w-1/4 p-2" alt="..." />
            <img src="Lego.png" className="block w-1/4 p-2 " alt="..." />
            <img src="Rolex.png" className="  block  w-1/4 p-2 " alt="..." />
          </div> */}
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
export default Companies;
