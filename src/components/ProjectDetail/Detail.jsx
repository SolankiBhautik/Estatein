import React from 'react'
import { bad, showere, area } from '../../assets'
import { Separator } from '../ui/separator'

const Smallcard = ({ title, src, number }) => {
    return (
        <div className='w-fit flex-1 p-4 border border-[#262626] border-collapse rounded-b-lg '>
            <div className=' flex gap-2 items-center justify-center'>
                <img src={src} alt={title} />
                <p className='p'>{title}</p>
            </div>
            <h4 className='h2 text-center'>{number}</h4>
        </div>
    )
}

const Features = ({ text, index }) => {
    return (
        <div key={index} className='flex  flex-1 gap-2 px-2 py-3 border-l-[#703BF7] border-l hover:border-l-8 transition-[border] duration-300 items-center w-full h-auto bg-gradient'>
            <ThunderingSVG />
            <p className="p">{text}</p>
        </div>
    )
}

const Detail = ({ description, bedrooms, bathrooms, size, features }) => {

    return (
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className='flex-1 mt-4  border border-[#262626] rounded-lg h-fit'>
                <div className='p-6'>
                    <h3 className='h2'>Description</h3>
                    <p className='p'>{description}</p>
                </div>
                <Separator />
                <div className='flex border-collapse w-full'>
                    <Smallcard
                        title="Bedrooms"
                        number={bedrooms}
                        src={bad}
                    />
                    <Smallcard
                        title="Bathrooms"
                        number={bathrooms}
                        src={showere}
                    />
                    <Smallcard
                        title="Area"
                        number={size}
                        src={area}
                    />
                </div>
            </div>
            <div className='flex-1 mt-4 p-5 md:p-7 lg:p-8 border border-[#262626] rounded-lg flex flex-col gap-4'>
                <h2 className='h2 pb-4'>Key Features and Amenities</h2>
                {
                    features && features.map((feature, index) => (
                        <Features key={index} text={feature} />
                    ))
                }
            </div>
        </div>
    )
}

export default Detail




const ThunderingSVG = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.9614 1.1962C11.1873 1.32216 11.2983 1.58596 11.2302 1.83551L9.73646 7.3125H15.1875C15.4115 7.3125 15.6141 7.44539 15.7034 7.65082C15.7927 7.85625 15.7516 8.09506 15.5987 8.25881L7.72373 16.6963C7.54724 16.8854 7.26453 16.9298 7.0386 16.8038C6.81268 16.6779 6.70177 16.4141 6.76983 16.1645L8.26356 10.6875H2.81251C2.58853 10.6875 2.38589 10.5546 2.29662 10.3492C2.20735 10.1438 2.24846 9.90495 2.40129 9.7412L10.2763 1.3037C10.4528 1.1146 10.7355 1.07024 10.9614 1.1962Z" fill="white" />
        </svg>
    )
}