import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, img, name, desc, price, ratings } = service;
  return (
    <div>
        <div className="hero bg-slate-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} alt='' className="w-full md:max-w-lg rounded-lg shadow-2xl" />
    <div className=''>
      <h1 className="text-3xl font-bold text-gray-600 font-mono">{name}</h1>
      <p className="py-6 text-md font-serif">{desc}</p>
        <div className="flex justify-around items-center">
        <p className="font-semibold text-lg">Price: <span className="text-orange-700">${price}</span></p>
            <p className="flex items-center text-xl"><span className="text-warning mr-2"><FaStar></FaStar></span><span className="font-semibold">{ratings}</span></p>
        </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ServiceDetails;
