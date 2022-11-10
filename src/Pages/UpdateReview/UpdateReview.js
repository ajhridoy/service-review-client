import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';

const UpdateReview = () => {
  const {user} = useContext(AuthContext)
    const storedReviews = useLoaderData()

    const handleUpdate = event => {
        event.preventDefault()
        const form = event.target;
    const email = user?.email
    const time = new Date()
    const photourl = user?.photoURL
    const name = form.name.value;
    const message = form.message.value;
    const itemId = storedReviews.itemId;
    const reviewDetails = {name, message, itemId, email, photourl, time}
    console.log(reviewDetails)

        fetch(`http://localhost:5000/myreviews/${storedReviews._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(reviewDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            toast.success('Update your reviews successfully')
          }
        })
      }
    return (
        <div className="my-5 p-3">
        <h2 className="text-2xl font-bold text-center">Update Your Reviews</h2>
        <form onSubmit={handleUpdate} className="text-center">
        <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Your Name:</label>
        <input type="text" name="name" placeholder="Name" readOnly defaultValue={storedReviews.name} className="input input-bordered input-accent w-full max-w-lg" />
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-semibold">Your Message:</label>
        <textarea name="message" defaultValue={storedReviews.message} className="textarea textarea-accent w-full max-w-lg" placeholder="Message"></textarea>
        </div>
        <input type="submit" className="btn btn-accent" value="Update Reviews" />
        </form>
      </div>
    );
};

export default UpdateReview;