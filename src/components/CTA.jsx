import React from 'react'
import { Button } from "./ui/button"

const CTA = () => {
  return (
    <section className='CTA py-8'>
        <div className='flex p-1 justify-between items-center gap-4 flex-col md:flex-row  text-center md:text-left  backdrop-blur-sm bg-[#1014183b] rounded-lg'>
            <div>
                <h3 className=' text-[48px] leading-[50px] '>Start Your Real Estate Journey Today</h3>
                <p className='pt-4 text-muted-foreground max-w-[100ch]'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>
            <Button>Explore Properties</Button>
        </div>
    </section>
  )
}

export default CTA

