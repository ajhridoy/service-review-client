import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

const SingleServices = ({ service }) => {
  const { _id, img, name, desc, price, ratings } = service;
  return (
    <div className="card md:w-78 bg-base-100 shadow-xl">
      <figure>
        <img className="" src={img} alt="photography" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{desc.slice(0, 100)} ...</p>
        <div className="card-actions justify-end items-center">
            <p className="font-semibold">Price: <span className="text-red-400">${price}</span></p>
            <p className="flex items-center"><span className="text-warning mr-2"><FaStar></FaStar></span><span className="font-semibold">{ratings}</span></p>
          <button className="btn btn-info">See Details <span className="ml-3"><FaArrowRight></FaArrowRight></span></button>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
