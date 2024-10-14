import React from 'react';
import Navbar from './Navbar/Navbar';
import banner from '../../assets/task banner.jpg'

const Home = () => {
    return (
        <div className='w-full mx-auto'>
            <Navbar></Navbar>
            <img className='w-full h-96' src={banner} alt="" />
        </div>
    );
};

export default Home;