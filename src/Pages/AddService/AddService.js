import React from 'react';
import toast from 'react-hot-toast';

const AddService = () => {
    const handleAddService = event =>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const desc = form.desc.value;

        const service = {name, img, price, desc, ratings}
        console.log(service)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Wow!!Added a service successfully')
                form.reset()
            }
        })
    }
    return (
        <div className='my-10 p-3'>
           <form onSubmit={handleAddService} className="text-center">
        <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-semibold">Service Name:</label>
        <input type="text" name="name" placeholder="Service Name" className="input input-bordered input-accent w-full max-w-lg" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="img" className="block mb-2 font-semibold">Service PhotoURL:</label>
        <input type="text" name="img" placeholder="Photo" className="input input-bordered input-accent w-full max-w-lg" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-semibold">Price:</label>
        <input type="text" name="price" placeholder="Price" className="input input-bordered input-accent w-full max-w-lg" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="ratings" className="block mb-2 font-semibold">Customer Ratings:</label>
        <input type="text" name="ratings" placeholder="Customer Ratings" className="input input-bordered input-accent w-full max-w-lg" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="desc" className="block mb-2 font-semibold">Product Description:</label>
        <textarea name="desc" className="textarea textarea-accent w-full max-w-lg" placeholder="Description"></textarea>
        </div>
        <input type="submit" className="btn btn-accent" value="Submit Service" />
        </form>
        </div>
    );
};

export default AddService;