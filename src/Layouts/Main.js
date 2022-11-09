import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedPages/Footer/Footer';
import Header from '../SharedPages/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;