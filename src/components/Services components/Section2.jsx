import React from 'react'
import Heading from '../ui/Heading'
import ServicePageBox from '../ui/ServicePageBox'

import { tenant, maintenance, financial, legal } from '../../assets'
import ServicePagecoolbox from '../ui/ServicePagecoolbox'

const Section2 = () => {
  return (
    <div className='p-8 pt-12'>
      <Heading 
        heading="Effortless Property Management"
        description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
      />
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <ServicePageBox 
          icon={tenant}
          heading="Tenant Harmony"
          description="Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies."
        />
        <ServicePageBox 
          icon={maintenance}
          heading="Maintenance Ease"
          description="Say goodbye to property maintenance headaches. We handle all aspects of property upkeep."
        />
        <ServicePageBox 
          icon={financial}
          heading="Financial Peace of Mind"
          description="Managing property finances can be complex. Our financial experts take care of rent collection"
        />
        <ServicePageBox 
          icon={legal}
          heading="Legal Guardian"
          description="Stay compliant with property laws and regulations effortlessly."
        />
        <ServicePagecoolbox 
          className="md:col-span-2"
          heading="Experience Effortless Property Management"
          description="Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership."
        />
      </div>
    </div>
  )
}

export default Section2