import React from 'react'

const Roundicon = ({icon}) => {
  return (
    <div className="stylish_border p-[1px] w-[90px] h-[90px] rounded-full center">
      <div className="w-[97%] h-[105%] p-2 rounded-full bg-[#141414] center">
        <div className="stylish_border p-[1px] w-[80px] h-[80px] rounded-full center ">
          <div className="w-[97%] h-[104%] rounded-full bg-[#141414]  center rotate-45 ">
            <img src={icon} alt="icon" className='h-8 w-8 center -rotate-45 file-[#A685FA]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roundicon