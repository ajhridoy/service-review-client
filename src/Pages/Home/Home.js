import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import SingleServices from './SingleServices';

const Home = () => {
    const services = useLoaderData();
    console.log(services)
    return (
        <div>
            <Banner></Banner>
            <div className='my-10'>
                <h2 className='text-4xl font-bold text-center mb-5 font-mono'>Best Selling Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:mx-10 p-4'>

                    {
                        services.map(service => <SingleServices
                        key={service._id}
                        service = {service}
                        ></SingleServices>)
                    }
                    
                </div>
                <Link to='/services' className='flex flex-col items-center mt-4'><button className="btn btn-accent">See All</button></Link>
            </div>
        </div>
    );
};

export default Home;