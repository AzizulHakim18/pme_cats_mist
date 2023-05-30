import React from 'react';

const AboutMining = () => {
    return (
        <div>
            <div className='lg:flex justify-center w-10/12 mx-auto'>
                <div className='mx-4 px-4'>
                    <h3 className='text-xl tracking-wider font-semibold'>About Mining</h3>
                    <h1 className='lg:text-5xl md:text-3xl sm:text-2xl font-bold my-4 py-8'>Extracting stone with latest techniques</h1>
                    <p>The business of installing mineral processing plants and bulk handling system since 1975. Specializing in the research, development, and manufacture of industrial stone crushing & screening equipment’s. Equipped with intelligent productions!</p>
                </div>
                <div>
                    <p className='text-xl font-semibold py-4'>We have established whole production chain, of which main products cover stone crushing screening equipment’s services!</p>
                    <div className='w-full h-2/5 mx-auto my-8'>
                        <img src="https://img.freepik.com/free-photo/oil-platform-ocean-with-sun-setting-it_123827-23498.jpg?w=996&t=st=1685467884~exp=1685468484~hmac=f405d90f53fc20de4524cee4c2bf22b3cd03fddda1d5e7640d002a099606f6ec" alt="" />
                    </div>
                </div>
            </div>

            <div className='w-10/12 h-28 mx-auto rounded-lg bg-gradient-to-r from-slate-700 to-rose-500 flex justify-center items-center'>
                <h3 className='text-2xl font-bold text-white '>New to mining service? call us on 899 000 999 88</h3>

            </div>
        </div>
    );
};

export default AboutMining;