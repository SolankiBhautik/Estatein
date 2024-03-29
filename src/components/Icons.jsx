
import React from 'react'

const Icons = ({icon, style}) => {
  return (
    <img src={icon} alt="icon" className={`h-5 w-5 pr-1 ${style} `} />
  )
}

export default Icons