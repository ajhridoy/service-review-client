import React from 'react';
import bannerImg from '../../images/photo-1542038784456-1ea8e935640e.jpg'

const Banner = () => {
    return (
        <div className="hero bg-slate-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bannerImg} alt='' className="w-full md:max-w-md rounded-lg shadow-2xl" />
    <div className='text-center'>
      <h1 className="text-5xl font-bold">Catch Your Moment!</h1>
      <p className="py-6 text-xl font-serif">Hi there! Welcome To <span className='text-orange-500 font-medium'>PHOTO_HUB</span>. I am a professional photographer. I have worked at thousands of events to capture the best moments. Also I give the best deal so checkout my services now !!</p>
      <button className="btn btn-accent">Get Services</button>
    </div>
  </div>
</div>
    );
};

export default Banner;