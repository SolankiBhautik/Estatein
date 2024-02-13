import React from 'react'
import Roundicon from './Roundicon'

const ServicePageBox = ({icon, heading, description}) => {
  return (
    <div className='box flex flex-col p-4 gap-4 lg:p-8 bg-[#141414]'>   
        <div className='flex gap-4 items-center'>
            <Roundicon
                icon={icon}
            />
            <h3 className="h3">{heading}</h3>
        </div>
        <div>
            <p className="p max-w-[40ch]">{description}</p>
        </div>
    </div>
  )
}

export default ServicePageBox