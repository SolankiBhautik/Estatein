import React from 'react'
import { locationicon } from '../../assets'

const Heading = ( title, location, price) => {
    return (
        <div>
            <h1 className='h1'>{title}</h1>
            <div>
                <img src={locationicon} alt="locationicon" className='h-5 w-5 pl-1' />
                <p className='p'>{location}</p>
            </div>
        </div>
    )
}

export default Heading