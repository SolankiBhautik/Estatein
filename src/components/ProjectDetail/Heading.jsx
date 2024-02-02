import React from 'react'
import { locationicon } from '../../assets'

const Heading = ({ name, location, price }) => {
    return (
        <div className=" flex gap-4 pb-8">
            <div>
                <h1 className='h2'>{name}</h1>
                <div className=" flex gap-1 items-center rounded-lg border border-[#262626] p-2 ">
                    <img src={locationicon} alt="locationicon" className='h-5 w-5 pl-1' />
                    <p className='p'>{location}</p>
                </div>
            </div>
            <div className='ml-auto'>
                <p className='p'>Price</p>
                <h2 className='h2'>$ {price}</h2>
            </div>
        </div>
    )
}

export default Heading