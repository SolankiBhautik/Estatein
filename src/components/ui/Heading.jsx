import React from 'react'

const Heading = ({heading,  description, className}) => {
  return (
    <div className={`${className} flex flex-col  pb-8`}>
        <h2 className='h1 '>{heading}</h2>
        <p className='p !font-normal'>{description}</p>
    </div>
  )
}

export default Heading