import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Routes/Root/Root";
import Home from "./Routes/Home/Home";
import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Search from "./Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <PrivateRoutes><Home></Home></PrivateRoutes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/search/:query",
        element: <Search></Search>,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <Toaster />
  </StrictMode>
);
