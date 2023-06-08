import React from 'react';
import { Link } from 'react-router-dom';
import mist from './../../asset/img/mist.png'
const Header = () => {
    return (
        <div className='relative top-0 left-0 z-10'>
            <div className='md:flex justify-end items-center lg:text-xl lg:font-semibold w-full h-24 bg-slate-900 text-white z-10'>
                <p className='md:mx-4 md:px-4 '>Mirpur Canotnement,Dhaka,Bangladesh</p>
                <p className='px-2'>+098575451154</p>

            </div>


            {/* navbar section */}
            <div>
                <div className="navbar ">
                    <div className='w-11/12 bg-rose-100 absolute top-20 lg:left-16 md:left-10 rounded-lg'>
                        <div className="flex justify-start mx-auto my-4">

                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link to='/'>HOME</Link></li>
                                    <li><Link to='/testrates'>TEST RATES</Link></li>
                                    <li><Link to='/consultancy'>CONSULTANCY</Link></li>
                                    <li><Link to='/experts'>EXPERTS</Link></li>
                                    <li><Link to='/about'>ABOUT</Link></li>
                                    <li><Link to='/contact'>CONTACT</Link></li>
                                    {/* <li><Link to='/faq'>FAQ</Link></li> */}
                                    <li><Link to='/login'>Log In</Link></li>

                                </ul>
                            </div>
                            <div className='flex  justify-start items-center'>
                                <img src={mist} alt="" className='w-12 h-12 m-2' />
                                <div >
                                    <h2 className='lg:text-2xl sm:text-xl font-bold'>CATS MIST (PME)</h2>
                                    <p className='text-sm font-semibold'>CENTRE FOR ADVISORY & TESTING SERVICES</p>
                                    <p className='text-sm font-semibold'>DEPT OF PETROLEUM & MINING ENGINEERING, MIST</p>
                                </div>
                            </div>

                        </div>
                        <div className="navbar-end hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                <li><Link to='/'>HOME</Link></li>
                                <li><Link to='/testrates'>TEST RATES</Link></li>
                                <li><Link to='/consultancy'>CONSULTANCY</Link></li>
                                <li><Link to='/experts'>EXPERTS</Link></li>
                                <li><Link to='/about'>ABOUT</Link></li>
                                <li><Link to='/contact'>CONTACT</Link></li>
                                {/* <li><Link to='/faq'>FAQ</Link></li> */}
                                <li><Link to='/login'>Log In</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;