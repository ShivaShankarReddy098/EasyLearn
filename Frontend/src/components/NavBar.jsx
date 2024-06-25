import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Categories_Dialoag from "@/utils/Categories_Dialoag";
import SearchBar from "./SeachBar";
import SearchtResultsList from "./SearchResultsList";

const navigation = [
  { name: <Categories_Dialoag />, href: "/categories" },
  { name: "Plans&Pricing", href: "/plans" },
  { name: "AboutUs", href: "/about" },
];
function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [results, setResults] = useState([]);
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-slate-300 border-gray-700 rounded-xl ml-2 mr-2 mt-1 ">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 justify-center lg:-ml-10 lg:mr-20 ">
            <NavLink to="/" className="-m-1.5 p-1.5 flex gap-3 ">
              <img
                className="h-8 w-auto"
                src="/EasyLearn_logo_Main.png"
                alt=""
              />
              <span className=" text-gray-700 font-extrabold hover:text-gray-500 ">
                EasyLearn
              </span>
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 lg:items-center lg:-mt-1 lg:-ml-8 ">
            <div className="search-bar-container ">
              <SearchBar mainResults={setResults} />
            </div>
            {/* <SearchtResultsList results={results} /> */}
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className="text-sm font-mono font-bold leading-6 text-gray-900 hover:text-gray-500 lg:items-center "
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <NavLink
              to="/login"
              className="text-sm font-mono font-bold leading-6 text-gray-900 hover:text-gray-500 lg:items-center lg:-mt-1 lg:-ml-[120px] "
            >
              Login <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex gap-2">
                <span className="text-gray-700 font-extrabold">EasyLearn</span>
                <img
                  className="h-8 w-auto"
                  src="/EasyLearn_logo_Main.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-mono font-bold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <SearchtResultsList results={results} />
    </>
  );
}
export default NavBar;
