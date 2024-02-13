import React from 'react'
import Heading from '../ui/Heading'
import Roundicon from '../ui/Roundicon'
import { shope } from '../../assets'

import Card from '../ui/Card'

const Hero = () => {
  return (
    <div className='p-8 pt-24'>
        <Heading 
            heading="Elevate Your Real Estate Experience"
            description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams."
        />
        <div className="flex flex-wrap gap-4 justify-center">
            <Card
                icon={shope}
                text="Find Your Dream Home"
            />
            <Card
                icon={shope}
                text="Unlock Property Value"
            />
            <Card
                icon={shope}
                text="Effortless Property Management"
            />
            <Card
                icon={shope}
                text="Smart Investments, Informed Decisions"
            />
        </div>
    </div>
  )
}

export default Hero