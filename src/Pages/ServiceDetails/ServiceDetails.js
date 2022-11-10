import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Authprovider/Authprovider";
import toast from "react-hot-toast";
import Review from "./Review/Review";
import useTitle from "../../hooks/useTitle";

const ServiceDetails = () => {
  const {user} = useContext(AuthContext)
  const service = useLoaderData();
  const { _id, img, name, desc, price, ratings } = service;
  const [reviews, setReviews] = useState([])
  const [displayReviews, setDisplayReviews] = useState(false)
  useTitle('Service-Details')

  useEffect(() => {
    fetch(`https://service-review-server-phi-one.vercel.app/reviews?itemId=${_id}`)
  .then(res => res.json())
  .then(data => {
    setReviews(data)
  })
  }, [_id, displayReviews])

  // console.log(reviews)

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const email = user?.email
    const time = new Date()
    const photourl = user?.photoURL
    const name = form.name.value;
    const message = form.message.value;
    const itemId = _id;
    const reviewDetails = {name, message, itemId, email, photourl, time}
    console.log(reviewDetails)
    fetch('https://service-review-server-phi-one.vercel.app/reviews', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(reviewDetails)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
          toast.success('You success fully Added a Review')
          setDisplayReviews(true)
          form.reset()
        }
    })
  }
  return (
    <div>
      //  service details start
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
      // service details end

      // clint review start
      <div className="my-5">
        <h2 className="text-3xl font-bold text-center">Here is Our Some Clients Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {
            reviews.map(review => <Review
              key={review._id}
              review={review}
            ></Review>)
          }
        </div>
        {/* client review end */}

        {/* review form  */}
      </div>
      {
        user ? 
       <>
          <div className="my-5 p-3">
        <h2 className="text-2xl font-bold text-center">Add Your Reviews</h2>
        <form onSubmit={handleSubmit} className="text-center">
        <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Your Name:</label>
        <input type="text" name="name" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered input-accent w-full max-w-lg" />
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">Your Message:</label>
        <textarea name="message" className="textarea textarea-accent w-full max-w-lg" placeholder="Message"></textarea>
        </div>
        <input type="submit" className="btn btn-accent" value="Send Reviews" />
        </form>
      </div>
    </>
        :
        <>
        <h2 className="text-center">
          <span className="text-3xl font-bold">If You Want To Review this Item..!! Please</span> <Link className="text-4xl font-bold text-orange-600 underline" to='/login'>LOG IN</Link>
        </h2>
        </>
      }
  </div>
  );
};

export default ServiceDetails;
