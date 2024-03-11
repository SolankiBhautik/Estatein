import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Dropdown from '../ui/dropdown'
import Heading from '../ui/Heading'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'




const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        searchQuery ?  navigate(`/properties?search=${searchQuery}`) : navigate('/properties');
        setSearchQuery(''); // Reset search query 
    };

    return (
        <section className='bg-gradient'>

            <Heading
                heading="Find Your Dream Property"
                description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey "
            />

            <div className='flex flex-col items-center justify-center gap-2'>
                <div className="bg-[#191919] flex w-full max-w-4xl items-center space-x-2 shadow-[0px_0px_0px_10px_#191919] rounded-[2px] h-auto">
                    <Input type="search" onChange={handleInputChange} value={searchQuery} placeholder="Search for a Property" className="z-10 hard-bg p-[16px] text-[20px] leading-[1.5] h-auto" />
                    <Button type="submit" onClick={handleSearch} className="  p-[16px] text-[20px] leading-[1.5] h-auto">Find Property</Button>
                </div>
            </div>
        </section>
    )
}

export default Header