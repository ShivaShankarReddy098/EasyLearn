import { useState } from "react";

function Cookies() {
  const [accepted, setAccepted] = useState(true);
  function handleCookie() {
    setAccepted(false);
  }
  return (
    <>
      {accepted && (
        <div className="bg-gray-100 z-50">
          <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <p className="text-sm text-gray-700 font-mono font-bold">
                We use cookies to ensure you get the best experience on our
                website. Learn more{" "}
                <a href="#" className="text-blue-500 font-mono">
                  here
                </a>
                .
              </p>
              <div className="flex space-x-4">
                <button
                  className="px-4 py-1.5 font-mono bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out"
                  onClick={handleCookie}
                >
                  Accept
                </button>
                <button
                  onClick={handleCookie}
                  className="px-4 py-1.5 font-mono bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition duration-300 ease-in-out"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Cookies;
