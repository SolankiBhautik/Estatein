import React from 'react'
import { Button } from '../ui/button'
import { handebilding } from '../../assets'
import Heading from '../ui/Heading'

const Hero = () => {
    return (
        <div className=" bg-[#141414] text-white">
            <div className=" mx-auto">
                <div className="flex lg:flex-row flex-col  gap-20 py-12">
                    <div className=' flex-1 pt-12'>
                        <Heading 
                            heading="Our Journey"
                            description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
                        />
                        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 pt-12">
                            <div className="bg-[#1A1A1A] p-6  rounded-lg border-[#262626] border">
                                <p className=" h1">200+</p>
                                <p className='p'>Happy Customers</p>
                            </div>
                            <div className="bg-[#1A1A1A] p-6  rounded-lg border-[#262626] border">
                                <p className=" h1">10k+</p>
                                <p className='p'>Properties For Clients</p>
                            </div>
                            <div className="bg-[#1A1A1A] p-6 col-span-full xl:col-span-1 rounded-lg border-[#262626] border text-center xl:text-start">
                                <p className=" h1">16+</p>
                                <p className='p'>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            alt="Buildings"
                            className="w-full h-auto border border-[#262626] rounded-lg"
                            height="600"
                            src={handebilding}
                            style={{
                                aspectRatio: "600/600",
                                objectFit: "cover",
                            }}
                            width="600"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero