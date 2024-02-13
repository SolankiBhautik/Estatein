import React from 'react'
import Heading from '../ui/Heading'
import { Icons } from '..'
import { gmail, location, phone } from '../../assets'
import { Button } from '../ui/button'


const Location = ({ hed, heading, desc, txt_gmail, txt_phone, txt_location }) => {
    return (
        <div className='flex flex-col gap-1 box p-6'>
            <p className="p">{hed}</p>
            <h2 className="h2 pt-2">{heading}</h2>
            <p className="p">{desc}</p>
            <div className='flex flex-wrap gap-4 py-4'>
                <div className='flex  gap-2 box p-2 pl-3 items-center !rounded-full'>
                    <Icons
                        icon={gmail}
                    />
                    <p className="p">{txt_gmail}</p>
                </div>

                <div className='flex gap-2 box p-2 pl-3 items-center !rounded-full'>
                    <Icons
                        icon={phone}
                    />
                    <p className="p">{txt_phone}</p>
                </div>

                <div className='flex gap-2 box p-2 pl-3 items-center !rounded-full'>
                    <Icons
                        icon={location}
                    />
                    <p className="p">{txt_location}</p>
                </div>
            </div>

            <Button >Get Direction</Button>
        </div>
    )
}

const OfficeLocations = () => {
    return (
        <div className='p-8 '>
            <Heading
                heading="Discover Our Office Locations"
                description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you"
            />

            <div className='flex gap-4 flex-col md:flex-row'>
                <Location
                    hed="Main Headquarters"
                    heading="123 Estatein Plaza, City Center, Metropolis"
                    desc="Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us."
                    txt_gmail="info@estatein.com"
                    txt_phone="+1 (123) 456-7890"
                    txt_location="Metropolis"
                />
                <Location
                    hed="Main Headquarters"
                    heading="123 Estatein Plaza, City Center, Metropolis"
                    desc="Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us."
                    txt_gmail="info@estatein.com"
                    txt_phone="+1 (123) 456-7890"
                    txt_location="Metropolis"
                />
            </div>
        </div>
    )
}

export default OfficeLocations