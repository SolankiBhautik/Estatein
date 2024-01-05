import React from 'react'
import { logo } from '../assets'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav className=" relative flex md:flex-row flex-col justify-between gap-4 mx-auto py-4 max-w-[1600px] items-center bg-[--grey-2]">
            <div className=' md:block hidden'>
                <img src={logo} alt="logo" className=' object-contain m-auto'/>
            </div>
            <div className=' flex gap-2 items-center  relative'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/aboutus">About Us</NavLink>
                <NavLink to="/properties">Properties</NavLink>
                <NavLink to="/services">Services</NavLink>
            </div>
            <div>
                <NavLink to="/contectus"><button className=' praymary-button'>Contact Us</button></NavLink>
            </div>
        </nav>
    )
}

export default Navbar