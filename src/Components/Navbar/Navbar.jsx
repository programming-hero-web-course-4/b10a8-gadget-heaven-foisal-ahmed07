import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto bg-[#9538E2]">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Gadget Heaven</h2>
        <div className="flex gap-5 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/dashboard">DashBoard</NavLink>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;