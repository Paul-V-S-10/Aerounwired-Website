import { createBrowserRouter } from "react-router-dom";
import MainUser from "./User/MainUser";
import HomePage from "./User/Pages/HomePage/HomePage";
import About from "./User/Pages/About/About";
import "./global.css"


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainUser />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/About",
          element: <About />
        }
      ]
    },
    {
      
    }
  
  ]);