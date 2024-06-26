import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Plans from "./pages/Plans";
import Error from "./pages/Error";
import ProfileUpdate from "./utils/ProfileUpdate";
import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./utils/ForgetPassword";
import CourseDetail from "./pages/CourseDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        // element: <Categories />,
        element: <CourseDetail />,
        // children: [
        //   {
        //     path: "/categories/:id",
        //     element: <CourseDetail />,
        //   },
        // ],
        // loader: () => {},
      },
      {
        path: "/plans",
        element: <Plans />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/updateProfile",
        element: <ProfileUpdate />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <Error />,
      },
      // {
      //   path: "/products/:productId",
      //   element: <ProductDetail />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
