import {useState} from 'react'
import { leftarrow, rightarrow } from '../../assets'

const ImageCarousel = ({ images }) => {

    const [active, setActive] = useState(0)

    const handelleftclick = () => {
        let i = active;
        let size = images.length
        i = (i - 1) % size
        setActive(i)
    }

    const handelrightclick = () => {
        let i = active;
        let size = images.length
        i = (i + 1) % size
        setActive(i)
    }

    return (
        <div className='py-2 flex flex-col gap-2 md:gap-4 lg:gap-8 rounded-lg border border-[#262626] soft-bg'>
            <div className={`flex  gap-2 md:gap-4`}>
                {
                    images && images.map((img, index) => (
                        <img 
                            src={img} 
                            alt="property images" 
                            key={index} 
                            className={`flex-1 cursor-pointer min-w-0 object-cover rounded-sm md:rounded-lg opacity-60 ${active == index && '!opacity-100'} transition-opacity`} 
                            onClick={() => setActive(index)}
                        />
                    ))
                }
            </div>
            <div className='relative '>

                <div 
                    onClick={handelleftclick}
                    className=' absolute top-0 left-0 bottom-0 w-[8vw] bg-[#262626] opacity-30 hover:opacity-50 transition-opacity duration-300 flex justify-center items-center cursor-pointer '>
                    <img src={leftarrow} alt="left arrow" className="w-[70px] "/>
                </div>

                <img 
                    src={images && images[active] } 
                    alt="property image" 
                    className=' object-contain w-full h-full rounded-lg max-h-[90vh]'
                />
                                
                <div 
                    onClick={handelrightclick}
                    className=' absolute top-0 right-0 bottom-0 w-[8vw] bg-[#262626] opacity-30 hover:opacity-50 transition-opacity duration-300 flex justify-center items-center cursor-pointer'>
                    <img src={rightarrow} alt="right arrow" className="w-[70px] "/>
                </div>

            </div>
        </div>
    )
}

export default ImageCarousel