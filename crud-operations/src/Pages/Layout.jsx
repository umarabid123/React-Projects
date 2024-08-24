import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Link to="/table">
        <button className="w-[98%] mx-auto bg-sky-400 p-4 text-center text-white font-bold rounded-lg hover:underline hover:bg-sky-500 transition-all duration-500 ease-linear">
          Show Table
        </button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Layout;
