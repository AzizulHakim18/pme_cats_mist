import React from 'react';
import Banner from './Banner';
import AboutMining from './AboutMining';
import Provide from './Provide';
import CustomerStatement from './CustomerStatement';

const Home = () => {
    return (
        <div>
            <div className='w-full h-screen'>
                <Banner></Banner>
            </div>
            <AboutMining></AboutMining>
            <Provide></Provide>
            <CustomerStatement></CustomerStatement>
        </div>
    );
};

export default Home;