import React from 'react';


const Banner = () => {
    return (
        <div className='absolute top-0 left-0 z-0'>

            <div className="carousel w-full h-screen">
                <div id="item1" className="carousel-item bg-gradient-to-tl from-slate-900 to-neutral-700 relative h-screen w-full">
                    <img src="https://img.freepik.com/free-photo/close-up-construction-site-excavator_1112-1223.jpg?w=1060&t=st=1685423638~exp=1685424238~hmac=254d5b5bc0fe24af9666009e4f0a09c90ef306ef13f174a3838e132373de2e93" className="w-full h-full object-cover absolute top-0 mix-blend-overlay" alt='' />
                    <div className='p-24 absolute top-24'>
                        <h1 className='text-4xl font-bold text-white'>This is practice season</h1>
                        <p className='text-xl font-semibold text-white'>This is a excavator</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item bg-gradient-to-tl from-slate-900 to-neutral-700 relative h-screen w-full">
                    <img src="https://img.freepik.com/free-photo/yellow-excavator-digging-ore-rich-rock-open-pit-mine_181624-47125.jpg?w=1380&t=st=1685424230~exp=1685424830~hmac=518fa1191707375bcaebc59629cc1ff4dcfa66d129125d6056792801c5ea5f9d" className="w-full h-full object-cover absolute mix-blend-overlay" alt='' />
                </div>
                <div id="item3" className="carousel-item bg-gradient-to-tl from-slate-900 to-neutral-700 relative h-screen w-full">
                    <img src="https://img.freepik.com/free-photo/close-up-construction-site-excavator_1112-1223.jpg?w=1060&t=st=1685423638~exp=1685424238~hmac=254d5b5bc0fe24af9666009e4f0a09c90ef306ef13f174a3838e132373de2e93" className="w-full" alt='' />
                </div>
                <div id="item4" className="carousel-item bg-gradient-to-tl from-slate-900 to-neutral-700 relative h-screen w-full">
                    <img src="https://img.freepik.com/free-vector/oilfield-poster_1284-12012.jpg?w=900&t=st=1685424315~exp=1685424915~hmac=4f405ee9142a9394b132c6738debc8fc14f41477cc82cabbac53c3f8b68f731d" className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full py-4 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;