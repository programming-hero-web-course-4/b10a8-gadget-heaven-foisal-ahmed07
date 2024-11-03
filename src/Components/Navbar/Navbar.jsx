import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto bg-[#9538E2] p-10 mt-10 rounded-3xl">
      <div className="navbar flex justify-between items-center">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold text-lg"
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/dashboard">DashBoard</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-white">
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <ul className="menu menu-horizontal px-1 flex gap-5 font-bold text-lg text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/dashboard">DashBoard</NavLink>
          </ul>
        </div>

        <div className="flex gap-3 ">
          <button className="p-3 bg-white rounded-full">
            <FaCartShopping />
          </button>
          <button className="p-3 bg-white rounded-full">
            <FaRegHeart></FaRegHeart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
