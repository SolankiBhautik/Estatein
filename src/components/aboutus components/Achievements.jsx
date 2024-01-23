import React from 'react'
import Heading from '../ui/Heading'


const Card = ({title, description}) => {
    return (
        <div className='p-5 border-[#262626] border shadow-[0px_0px_0px_10px_#191919] rounded-lg'>
            <h2 className='h2 mb-4'>{title}</h2>
            <p className='p'>{description}</p>
        </div>
    )
}

const Achievements = () => {
    return (
        <div className='mt-32 mx-auto flex flex-col gap-8'>
            <Heading 
                heading="Our Achievements"
                description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
            />
            <div className='flex gap-12 flex-col md:flex-row md:gap-8 lg:gap-12'>
                <Card 
                    title="3+ Years of Excellence"
                    description="With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."
                />
                <Card 
                    title="Happy Clients"
                    description="Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
                />
                <Card 
                    title="Industry Recognition"
                    description="We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
                />
            </div>
        </div>
    )
}

export default Achievements