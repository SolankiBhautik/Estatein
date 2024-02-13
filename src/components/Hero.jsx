import React from 'react'
import { bilding } from '../assets'

import { Button } from "./ui/button"
import Heading from './ui/Heading'

import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
          <div className=' pt-12'>
            <Heading
              heading="Discover Your Dream Property with Estatein"
              description="Your journey to finding the perfect property begins here. Explore our listings to find the home that
              matches your dreams."
            />
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <NavLink to="/services" ><Button className="w-full">Learn More</Button></NavLink>
              <NavLink to="/properties" ><Button variant="outline" className="w-full">Browse Properties</Button></NavLink>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="box p-4 soft-bg">
                <p className="text-2xl font-bold">200+</p>
                <p>Happy Customers</p>
              </div>
              <div className="box p-4 soft-bg">
                <p className="text-2xl font-bold">10k+</p>
                <p>Properties For Clients</p>
              </div>
              <div className="box p-4 soft-bg">
                <p className="text-2xl font-bold">16+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <img
              alt="Buildings"
              className="w-full h-auto"
              height="600"
              src={bilding}
              style={{
                aspectRatio: "600/600",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="box p-4 soft-bg flex bg-cool items-center">
            <HomeIcon className="text-purple-600 mr-4" />
            <div>
              <p className="h3 !font-bold">Find Your Dream Home</p>
              <p className="p">Explore our listings</p>
            </div>
          </div>
          <div className="box p-4 soft-bg flex bg-cool items-center">
            <KeyIcon className="text-purple-600 mr-4" />
            <div>
              <p className="h3 !font-bold">Unlock Property Value</p>
              <p className="p">Get the best deals</p>
            </div>
          </div>
          <div className="box p-4 soft-bg flex bg-cool items-center">
            <BuildingIcon className="text-purple-600 mr-4" />
            <div>
              <p className="h3 !font-bold">Effortless Property Management</p>
              <p className="p">We handle everything</p>
            </div>
          </div>
          <div className="box p-4 soft-bg flex bg-cool items-center">
            <BarChartIcon className="text-purple-600 mr-4" />
            <div>
              <p className="h3 !font-bold">Smart Investments, Informed Decisions</p>
              <p className="p">Maximize your ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero



function BarChartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function KeyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  )
}