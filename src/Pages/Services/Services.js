import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import SingleServices from '../Home/SingleServices';

const Services = () => {
    const services = useLoaderData()
    useTitle('Services')
    return (
        <div>
        <h2 className='text-4xl font-bold text-center my-5 font-mono'>My Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:mx-10 p-4'>
                {
                    services.map(service => <SingleServices 
                        key={service._id}
                        service = {service}
                    ></SingleServices>)
                }
            </div>
        </div>
    );
};

export default Services;