import React from 'react'

const Heading = ({heading,  description, className}) => {
  return (
    <div className={`${className} flex flex-col gap-4  pb-8 befor_icon relative`}>
        <h2 className='h1 '>{heading}</h2>
        <p className='p !font-normal'>{description}</p>
    </div>
  )
}

export default Heading