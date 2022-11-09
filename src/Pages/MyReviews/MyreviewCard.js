import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const MyreviewCard = ({review}) => {
    const{itemId, message} = review
    const [service, setService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/service/${itemId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, [itemId])
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{service.name}</h2>
    <p>{message}</p>
    <div className="card-actions justify-end mt-3">
      <button className="btn btn-primary mr-3">Edit</button>
      <button className="btn btn-error">Delete</button>
    </div>
  </div>
</div>
    );
};

export default MyreviewCard;