import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { data } from "autoprefixer";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id, img, name, desc, price, ratings } = service;

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const message = form.message.value;
    const itemId = _id;
    const reviewDetails = {name, message, itemId}
    console.log(reviewDetails)
    fetch('http://localhost:5000/reviews', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(reviewDetails)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
  }
  return (
    <div>
      <div className="hero bg-slate-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            alt=""
            className="w-full md:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-3xl font-bold text-gray-600 font-mono">
              {name}
            </h1>
            <p className="py-6 text-md font-serif">{desc}</p>
            <div className="flex justify-around items-center">
              <p className="font-semibold text-lg">
                Price: <span className="text-orange-700">${price}</span>
              </p>
              <p className="flex items-center text-xl">
                <span className="text-warning mr-2">
                  <FaStar></FaStar>
                </span>
                <span className="font-semibold">{ratings}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h2 className="text-2xl font-bold text-center">Add Your Reviews</h2>
        <form onSubmit={handleSubmit} className="text-center">
        <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Your Name:</label>
        <input type="text" name="name" placeholder="Name" className="input input-bordered input-accent w-full max-w-lg" />
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">Your Message:</label>
        <textarea name="message" className="textarea textarea-accent w-full max-w-lg" placeholder="Message"></textarea>
        </div>
        <input type="submit" className="btn btn-accent" value="Send Reviews" />
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
