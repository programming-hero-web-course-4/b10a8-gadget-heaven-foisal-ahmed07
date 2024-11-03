import { useLoaderData } from "react-router-dom";

const Gadget = () => {
  const gadgets = useLoaderData();

  return (
    <div className="w-11/12 mx-auto ">
      <h2 className="font-bold text-3xl text-center pb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {/* category btn */}
        <div className="col-span-1">
          <h2>sdf</h2>
        </div>
        {/* card  */}
        <div className="col-span-3">
          {/* per card */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
            {gadgets.map((gadget) => (
              <div className=" p-6 bg-white shadow-xl rounded-xl space-y-3">
                <img
                  className="w-[280px] h-[180px] rounded-xl"
                  src={gadget.product_image}
                  alt=""
                />
                <h2 className="font-bold text-2xl">{gadget.product_title}</h2>
                <p className="text-gray-500 font-semibold">
                  Price: ${gadget.price}
                </p>
                <button className="btn rounded-full btn-outline btn-primary">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
