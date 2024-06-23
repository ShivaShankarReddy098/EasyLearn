import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

import Footer from "./Footer";
function RootLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default RootLayout;
