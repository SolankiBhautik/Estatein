import React from 'react'
import Heading from '../ui/Heading'
import ServicePageBox from '../ui/ServicePageBox'

import { union, marketing, negotiation, closing } from '../../assets'
import ServicePagecoolbox from '../ui/ServicePagecoolbox'

const Section1 = () => {
  return (
    <div className='p-8'>
      <Heading 
        heading="Unlock Property Value"
        description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey"
      />
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <ServicePageBox 
          icon={union}
          heading="Valuation Mastery"
          description="Discover the true worth of your property with our expert valuation services."
        />
        <ServicePageBox 
          icon={marketing}
          heading="Strategic Marketing"
          description="Selling a property requires more than just a listing; it demands a strategic marketing approach."
        />
        <ServicePageBox 
          icon={negotiation}
          heading="Negotiation Wizardry"
          description="Negotiating the best deal is an art, and our negotiation experts are masters of it."
        />
        <ServicePageBox 
          icon={closing}
          heading="Closing Success"
          description="A successful sale is not complete until the closing. We guide you through the intricate closing process."
        />
        <ServicePagecoolbox 
          className="md:col-span-2"
          heading="Unlock the Value of Your Property Today"
          description="Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset."
        />
      </div>
    </div>
  )
}

export default Section1