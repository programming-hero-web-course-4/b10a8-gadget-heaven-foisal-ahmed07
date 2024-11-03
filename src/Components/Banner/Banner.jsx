import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="space-y-5">
        <h2 className="text-white text-6xl font-bold text-center">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
        </h2>
        <p className="text-gray-300 text-center pt-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!
        </p>
        <div className="flex justify-center">
          <button className="btn rounded-full bg-gray-100 text-[#9538E2] font-bold ">
            {" "}
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
