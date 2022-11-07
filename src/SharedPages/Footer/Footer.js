import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from "../../images/download-removebg-preview.png"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-orange-200 text-base-content">
  <div>
    <img className='w-20' src={footerLogo} alt="" />
    <h2 className='text-2xl font-bold'>PHOTO-HUB</h2>
    <p>All rights are reserve.</p>
  </div> 
  <div>
    <span className="footer-title">Categories</span> 
    <Link className="link link-hover">Home</Link> 
    <Link className="link link-hover">Services</Link> 
    <Link className="link link-hover">Blog</Link> 
    {/* <Link className="link link-hover">AChievements</Link> */}
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>
</footer>
    );
};

export default Footer;