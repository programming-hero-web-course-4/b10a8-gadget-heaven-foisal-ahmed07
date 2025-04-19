import React from "react";

const CategoryBtn = (gadgets) => {
  console.log(gadgets);
  return (
    <div className="flex flex-col gap-10 w-10/12">
    <button className="btn btn-primary btn-outline ">IPhone</button>
    <button className="btn btn-primary btn-outline ">MacBook</button>
    <button className="btn btn-primary btn-outline ">EarBuds</button>
  </div>
  );
};

export default CategoryBtn;
