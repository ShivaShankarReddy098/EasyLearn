import Home from "./pages/Home";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Plans from "./pages/Plans";
import Error from "./pages/Error";
import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
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
        element: <Categories />,
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
