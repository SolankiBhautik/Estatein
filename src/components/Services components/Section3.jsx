import React from 'react'
import Heading from '../ui/Heading'
import { Button } from '../ui/button'

import ServicePageBox from '../ui/ServicePageBox'
import { union, rio, customizes, legal  } from '../../assets'

const Section3 = () => {
  return (
    <div className='p-8 pt-12 flex flex-col xl:flex-row gap-8'>
      <div className=" basis-4/12">
        <Heading
          heading="Smart Investments, Informed Decisions"
          description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions."
        />
        <div className={` box  flex flex-col  p-4 gap-4 lg:p-8 bg-cool soft-bg`}>
          <h2 className='h2 '>Unlock Your Investment Potential</h2>
          <p className='p !font-normal'>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
          <Button variant="primary" className="border" >Learn More</Button>
        </div>
      </div>
      <div className='p-2 soft-bg rounded-xl grid md:grid-cols-2 grid-cols-1 gap-2  basis-8/12 '>
        <ServicePageBox 
          icon={union}
          heading="Market Insight"
          description="Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions"
        />
        <ServicePageBox 
          icon={rio}
          heading="ROI Assessment"
          description="Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"
        />
        <ServicePageBox 
          icon={customizes}
          heading="Customized Strategies"
          description="Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"
        />
        <ServicePageBox 
          icon={legal}
          heading="Diversification Mastery"
          description="Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations"
        />
      </div>
    </div>
  )
}

export default Section3