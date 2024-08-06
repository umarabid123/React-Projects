import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./Component/About/About.jsx";
import Home from "./Component/Home/Home.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import Contact from "./Component/Contact/Contact.jsx";

// const router = createBrowserRouter([{
//   path:'/',
//   element: <Layout/>,
//   children:[{
//     path:"",
//     element: <Home />
//   },
//   {
//     path:"about",
//     element: <About />
//   },
//   {
//     path:"contact",
//     element: <Contact />
//   },
// ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
