function SignUp() {
  return (
    <>
      <div className=" justify-center flex h-full w-full lg: p-5">
        <div className="h-screen w-1/2 bg-blue-400">
          <img src="/SignUp.svg" className="h-full w-full" />
        </div>
        <div className="h-screen w-1/2 bg-black">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div>
              <p className="text-2xl font-mono text-blue-400">Welcome</p>
              <p className="font-mono">
                Join <span className="text-pink-400 text-xl">EasyLearn</span>{" "}
                community
              </p>
            </div>
            <div className="my-6">
              <button className=" font-mono text-blue-600 flex w-full justify-center rounded-3xl border-none bg-white p-1 hover:bg-gray-200 sm:p-2">
                <img
                  src="/Google.png"
                  className="mr-2 w-6 object-fill font-mono "
                />
                Login with Google
              </button>
            </div>
            <div>
              <fieldset className="border-t border-solid border-gray-600">
                <legend className="mx-auto px-2 text-center text-sm font-mono">
                  OR USE YOUR EMAIL
                </legend>
              </fieldset>
            </div>
            <div className="mt-2">
              <form>
                <div>
                  <label
                    className="mb-2.5 block font-extrabold font-mono"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="inline-block  w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="XYZ"
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="mb-2.5 block font-extrabold font-mono"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="inline-block  w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="name@gmail.com"
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="mb-2.5 block font-extrabold font-mono"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow"
                  />
                </div>
                <div className="mt-2">
                  <label
                    className="mb-2.5 block font-extrabold font-mono"
                    htmlFor="ConformPassword"
                  >
                    Conform Password
                  </label>
                  <input
                    type="text"
                    id="conformPassword"
                    className="inline-block  w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                  />
                </div>
                {/* <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  <div>
                    <input type="checkbox" id="remember" className="w-4 h-3 " />
                    <label
                      htmlFor="remember"
                      className="mx-2 text-sm font-mono"
                    >
                      Remember me
                    </label>
                  </div>
                </div> */}
                <div className="my-2">
                  <button className="w-full rounded-lg font-mono  bg-blue-600 p-3 hover:bg-blue-500 focus:outline">
                    Register
                  </button>
                </div>
                <div>
                  <fieldset className="border-t border-solid border-gray-600">
                    <legend className="mx-auto px-2 text-center text-sm font-mono">
                      <a href="/login" className="hover:text-blue-600">
                        Already have an account?
                      </a>
                    </legend>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
