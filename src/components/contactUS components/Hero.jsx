import React from 'react'
import Heading from '../ui/Heading'
import { gmail, phone, location, media } from '../../assets'

import Card from '../ui/Card'

const Hero = () => {
  return (
    <div className='p-8 pt-24'>
        <Heading 
            heading="Get in Touch with Estatein"
            description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation."
        />
        <div className="flex flex-wrap gap-4 justify-center">
            <Card
                icon={gmail}
                text="info@estatein.com"
            />
            <Card
                icon={phone}
                text="+1 (123) 456-7890"
            />
            <Card
                icon={location}
                text="Main Headquarters"
            />
            <Card
                icon={media}
                text="Instagram &nbsp;&nbsp;&nbsp;&nbsp; LinkedIn &nbsp;&nbsp;&nbsp;&nbsp; Facebook"
            />
        </div>
    </div>
  )
}

export default Hero