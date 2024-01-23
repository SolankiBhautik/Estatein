import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Dropdown from '../ui/dropdown'
import Heading from '../ui/Heading'


const dropdownMenuData = [
    {
        label: 'Location',
        icon: '',
        items:['item1','item2','item3']
    },
    {
        label: 'Property Type',
        icon: '',
        items:['item1','item2','item3']
    },
    {
        label: 'Price Range',
        icon: '',
        items:['item1','item2','item3']
    },
    {
        label: 'Property size',
        icon: '',
        items:['item1','item2','item3']
    },
    {
        label: 'Build Year',
        icon: '',
        items:['item1','item2','item3']
    }
]

const filters = (data) => {
    return (
        <div className=' flex-auto' key={data.label}>
            <Dropdown
                {...data}
            />
        </div>
    )
}


const Header = () => {
    return (
        <div className='bg-gradient'>

            <Heading 
                heading="Find Your Dream Property"
                description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
            />

            <div className='flex flex-col items-center justify-center gap-2'>
                <div className="bg-[#191919] flex w-full max-w-4xl items-center space-x-2 shadow-[0px_0px_0px_10px_#191919] rounded-[2px] h-auto">
                    <Input type="email" placeholder="Search for a Property" className=" p-[16px] text-[20px] leading-[1.5] h-auto" />
                    <Button type="submit" className="  p-[16px] text-[20px] leading-[1.5] h-auto">Find Property</Button>
                </div>
                <div className='bg-[#191919] flex gap-2 flex-wrap w-full max-w-6xl items-center justify-center shadow-[0px_0px_0px_10px_#191919] rounded-[2px] flex-stretch'>

                {
                    dropdownMenuData && dropdownMenuData.map(data => filters(data))
                }

                </div>
            </div>
        </div>
    )
}

export default Header