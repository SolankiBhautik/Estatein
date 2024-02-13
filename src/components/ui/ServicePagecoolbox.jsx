import React from 'react'
import { Button } from './button'

const ServicePagecoolbox = ({className, heading, description}) => {

    return (
        <div className={`${className} box  flex flex-col  p-4 gap-4 lg:p-8 bg-cool soft-bg`}>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
                <h2 className='h2 '>{heading}</h2>
                <Button variant="primary" className="border" >Learn More</Button>
            </div>
            <p className='p !font-normal'>{description}</p>
        </div>
    )
}

export default ServicePagecoolbox