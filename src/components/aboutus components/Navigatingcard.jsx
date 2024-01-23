import React from 'react'
import Heading from '../ui/Heading'

const Card = ({ step, title, description }) => {
    return (
        <div className=''>
            <p className='p-4 border border-[#262626] rounded-2xl rounded-bl-none rounded-br-none'>STAEP {step}</p>
            <div className='p-12 border border-[#262626] rounded-2xl rounded-tl-none rounded-tr-none'>
                <h2 className='h2 pb-4'>{title}</h2>
                <p className='p'>{description}</p>
            </div>
        </div>
    )
}

const Navigatingcard = () => {
    return (
        <div className='mt-32  '>
            <Heading
                heading='Navigating the Estatein Experience'
                description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
            />
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 '>
                <Card 
                    step='01'
                    title='Discover a World of Possibilities'
                    description='Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,'
                />
                <Card 
                    step='01'
                    title='Discover a World of Possibilities'
                    description='Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,'
                />
                <Card 
                    step='01'
                    title='Discover a World of Possibilities'
                    description='Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,'
                />
                <Card 
                    step='01'
                    title='Discover a World of Possibilities'
                    description='Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,'
                />
                <Card 
                    step='01'
                    title='Discover a World of Possibilities'
                    description='Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,'
                />
                <Card 
                    step='01'
                    title='Discover a World of Possibilities'
                    description='Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,'
                />
            </div>
        </div>
    )
}

export default Navigatingcard