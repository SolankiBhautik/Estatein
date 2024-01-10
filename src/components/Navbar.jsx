import React from 'react'
import { logo } from '../assets'
import { NavLink, useLocation } from 'react-router-dom'
import { Button } from './ui/button'

const Navbar = () => {

    return (
        <nav className="flex md:flex-row flex-col justify-between gap-4 mx-auto py-4 max-w-[1600px] items-center bg-background">
            <div className=' md:block hidden'>
                <img src={logo} alt="logo" className=' object-contain m-auto'/>
            </div>
            <div className=' flex gap-2 items-center  relative  bg-background'>
                <NavLink to="/"><Button variant="outline">Home</Button></NavLink>
                <NavLink to="/aboutus"><Button variant="outline">About Us</Button></NavLink>
                <NavLink to="/properties"><Button variant="outline">Properties</Button></NavLink>
                <NavLink to="/services"><Button variant="outline">Services</Button></NavLink>
            </div>
            <div>
                <NavLink to="/contectus"><Button >Contact Us</Button></NavLink>
            </div>
        </nav >
    )
}

export default Navbar