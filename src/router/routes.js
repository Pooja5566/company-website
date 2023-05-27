import React, { lazy } from "react";
// import { Redirect } from "react-router-dom";
import HomeLayout from "../Homelayout";
// import DashboardLayout from "src/layouts/DashboardLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects/Projects";

const routes = [
  {
    // exact: true,
    path: "/",
    element: Home,
    layout: HomeLayout,
    // element: lazy(() => import("../Home")),
  },
  {
    // exact: true,
    path: "/about",
    element: About,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
  {
    // exact: true,
    path: "/projects",
    element: Projects,
    layout: HomeLayout,
    // element: lazy(() => import("../Projects")),
  },
  {
    // exact: true,
    path: "/contact-us",
    element: Contact,
    layout: HomeLayout,
    // element: lazy(() => import("../About")),
  },
];
export default routes;
