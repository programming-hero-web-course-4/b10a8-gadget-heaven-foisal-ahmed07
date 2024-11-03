import React from "react";

const Footer = () => {
  return (
    <div className="mt-28">
      <div className="space-y-3 border-b pb-8">
        <h2 className="text-4xl font-bold text-center">Gadget Heaven</h2>
        <p className=" font-semibold text-gray-500 text-center">
          Leading the way in cutting-edge technology and innovation
        </p>
      </div>
      <footer className="footer bg-white text-gray-500 font-semibold p-10">
  <nav>
    <h6 className="text-black text-xl font-bold">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="text-black text-xl font-bold">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="text-black text-xl font-bold">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  );
};

export default Footer;
