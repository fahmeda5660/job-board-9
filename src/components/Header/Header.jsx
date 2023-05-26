import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
const Header = () => {
    return (
        <div className="navbar bg-base-100 md:px-24">
            <div className="navbar-start">
            <h2 className='font-extrabold text-[28px] md:text-[32px] leading-[22px] md:leading-[44px] text-[#1A1919]'>Job Board</h2>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-bold text-[16px] leading-[22px] text-[#757575] menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/statistics">Statistics</ActiveLink>
                        <ActiveLink to="/jobs">Applied Jobs</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                    </ul>
                </div>
                {/* <h2 className='font-extrabold text-[28px] md:text-[32px] leading-[22px] md:leading-[44px] text-[#1A1919]'>Job Board</h2> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className='font-bold text-[16px] leading-[22px] text-[#757575]'>
                    <ActiveLink to="/">Home</ActiveLink>
                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                    <ActiveLink to="/jobs">Applied Jobs</ActiveLink>
                    <ActiveLink to="/blog">Blog</ActiveLink>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn-apply text:[10px] md:text-[20px]">Start Applying</a>
            </div>
        </div>
    );
};

export default Header;