import React from 'react';
import Banner from './Banner';
import AboutMining from './AboutMining';
import Provide from './Provide';

const Home = () => {
    return (
        <div>
            <div className='w-full h-screen'>
                <Banner></Banner>
            </div>
            <AboutMining></AboutMining>
            <Provide></Provide>
        </div>
    );
};

export default Home;