// import { useState } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import "flowbite";
import NavBar from "../components/NavBar";
import Plans from "./Plans";
import NewsletterSection from "../components/NewsletterSection";
import About from "./About";
import FeedBack from "@/components/FeedBack";
import Contact from "@/components/Contact";
import Information from "@/components/Information";
import Componies from "@/components/Componies";

// const navigation = [
//   { name: "Categories", href: "#" },
//   { name: "Plans&Pricing", href: "#" },
//   { name: "EasyLearn Business", href: "#" },
//   { name: "AboutUs", href: "#" },
// ];

export default function Home() {
  //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <NavBar />
      <HomeSection />
      <Information />
      <Componies />
      <Plans />
      <FeedBack />
      <About />
      <Contact />
      <NewsletterSection />
      {/* <Footer /> */}
    </div>
  );
}
