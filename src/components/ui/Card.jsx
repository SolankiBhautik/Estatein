import React from 'react'
import Roundicon from './Roundicon'

const Card = ({icon, text}) => {
    return(
        <div className='box flex flex-col gap-4 soft-bg items-center p-4  grow'>
            <Roundicon 
                icon={icon}
            />
            <h3 className="h3 max-w-[20ch] text-center">{text}</h3>
        </div>
    )
}

export default Card