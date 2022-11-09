import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Authprovider/Authprovider';
import MyreviewCard from './MyreviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    }, [user?.email])

    // added delete method
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure to delete this review')
        if(proceed){
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               if(data.deletedCount > 0){
                toast.success('Deleted Your Reviews Successfully')
                const remainingReviews = myReviews.filter(review => review._id !== id)
                setMyReviews(remainingReviews)
               }
            })
        }
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-8'>Here All Your Reviews</h2>

            {
                myReviews.length === 0 ?
                    <>
                    <h1 className='text-2xl text-center font-bold text-red-600'>You have no review...please add your review!!</h1>
                    </>
                 : 

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4'>
                {
                    myReviews.map(review => <MyreviewCard
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                    ></MyreviewCard>)
                }
            </div>
            }
        </div>
    );
};

export default MyReviews;