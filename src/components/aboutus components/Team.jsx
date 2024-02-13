import React from 'react'
import Heading from '../ui/Heading'
import { tweetericon, pepal1, pepal2, pepal3, pepal4 } from '../../assets' 

const Card = ({ img, name, title }) => (
    <div className='flex flex-col gap-2 p-2 rounded-[16px] max-w-[300px] border border-[#262626] text-center min-h-[350px]'>
        <img src={img} alt={`${name} ${title}`} className='object-contain rounded-[8px]'/>
        <div>
            <p className='text-[24px]'>{name}</p>
            <p className='p'>{title}</p>
        </div>
        <div className='flex justify-between p-2 soft-bg rounded-[8px] items-center  border border-[#262626] mt-auto'>
            <p>Say Hello </p>
            <img src={tweetericon} alt="icon" className='bg-[#703BF7] rounded-full p-2'/>
        </div>
    </div>
)

const Team = () => {
    return (
        <div className='mt-32'>

            <Heading
                heading='Meet the Estatein Team'
                description='At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.'
            />

            <div className='flex flex-wrap gap-4 justify-center'>   
                <Card
                    img={pepal1}
                    name="Max Mitchell"
                    title="Founder"
                />
                <Card
                    img={pepal2}
                    name="Sarah Johnson"
                    title="Chief Real Estate Officer"
                />
                <Card
                    img={pepal3}
                    name="David Brown"
                    title="Head of Property Management"
                />
                <Card
                    img={pepal4}
                    name="Michael Turner"
                    title="Legal Counsel"
                />
            </div>

        </div>
    )
}

export default Team