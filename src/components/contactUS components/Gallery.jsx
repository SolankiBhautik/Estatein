import React from 'react'
import { officeimg, team2img, team3img, team4img, team5img, teaming } from '../../assets'
import Heading from '../ui/Heading'


const Gallery = () => {
  return (
    <div className="grid p-4 lg:p-8 grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 ">
      <img src={officeimg} alt="img" className=' object-fill h-auto w-full' />
      <img src={teaming} alt="img" className=' object-cover h-auto w-full' />
      <img src={team2img} alt="img" className=' object-cover h-auto w-full' />
      <div className='flex gap-2 h-full w-full'>
        <img src={team3img} alt="img" className=' object-cover w-1/2 h-auto ' />
        <img src={team4img} alt="img" className=' object-cover w-1/2 h-auto ' />
      </div>
      <img src={team5img} alt="img" className=' object-cover h-auto w-full' />
      <Heading
        className="p-4 box soft-bg bg-cool"
        heading="Explore Estatein's World"
        description="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
      />
    </div>
  )
}

export default Gallery