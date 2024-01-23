import React from 'react'
import Heading from '../ui/Heading'
import { Stareicon, groupicon, educationicon } from '../../assets'


const Values = () => {

    const Valuecard = ({icon, title, description, className}) => {
        return (
            <div className={`p-4  border-[#262626] rounded-2xl ${className}`}>
                <div className='flex gap-4 mb-4'>
                    <div className='rounded-full p-3 border border-[#703BF7] h-fit'><img src={icon} alt="icons" /></div>
                    <h2 className='h2'>{title}</h2>
                </div>
                <div>
                    <p className='p'>{description}</p>
                </div>
            </div>
        )
    } 

    return (
        <div className='mt-32 mx-auto flex flex-col xl:flex-row gap-8'>
            <div className='my-auto basis-4/12'>
                <Heading
                    heading="Our Values"
                    description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                    className={'gap-4'}
                />

            </div>
            <div className='p-4 grid md:grid-cols-2 grid-cols-1 basis-8/12 border-[#262626] border shadow-[0px_0px_0px_10px_#191919] rounded-xl'>
                <Valuecard 
                    icon={Stareicon}
                    title="Trust"
                    description="Trust is the cornerstone of every successful real estate transaction."
                    className='border-r-2 border-b-2 '
                />
                <Valuecard 
                    icon={educationicon}
                    title="Education"
                    description="We set the bar high for ourselves. From the properties we list to the services we provide."
                    className='border-b-2 border-l-2'
                />
                <Valuecard 
                    icon={groupicon}
                    title="Client-Centric"
                    description="Your dreams and needs are at the center of our universe. We listen, understand."
                    className='border-r-2 border-b-2 md:border-b-0'
                />
                <Valuecard 
                    icon={Stareicon}
                    title="Our Commitment"
                    description="We are dedicated to providing you with the highest level of service, professionalism, and support."
                    className='border-l-2  border-b-2 md:border-b-0'
                />
            </div>
        </div>
    )
}

export default Values