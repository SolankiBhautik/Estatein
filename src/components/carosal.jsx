import React from 'react'
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

import { bildingsvg, showere, bad, leftarrow, rightarrow } from "../assets";
import { FeaturedProperties } from '.';



const carosal = () => {
    const [activecard, setactivecard] = useState(0)


    const handleNextClick = async () => {
        if (activecard === data.length - 1) {
            setactivecard(0)
            console.log("index : ", activecard);
        }
        else {
            setactivecard(prev => prev + 1)
            console.log("index : ", activecard);
        }
    }

    const handleprevClick = () => {
        if (activecard === 0) {
            setactivecard(data.length - 1)
            console.log("index : ", activecard);
        }
        else {
            setactivecard(prev => prev === 0 ? data.length - 1 : prev - 1)
            console.log("index : ", activecard);
        }
    }


    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });

    const cardcount = isMobile ? 1 : isTablet ? 2 : 3;

    const Icons = ({ icon }) => {
        return (
            <img src={icon} alt="icon" className="h-5 w-5 pr-1" />
        )
    }

    return (
        <div key="1" className="bg-background text-foreground p-12 ">
            <h2 className="text-4xl font-bold mb-4 text-center sm:text-start">Featured Properties</h2>
            <p className="mb-12 flex justify-between items-center flex-col sm:flex-row gap-4 text-center sm:text-start">
                <span>
                    Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes
                    and investments available through Estatery. Click 'View Details' for more information.
                </span>
                <Button variant="outline">All Properties</Button>
            </p>

            <FeaturedProperties />

            <div className="flex justify-center items-center space-x-4 mt-8">
                <Button variant="outline" onClick={handleprevClick}>
                    <Icons icon={leftarrow} />
                </Button>
                <p> </p>
                <Button variant="outline" onClick={handleNextClick}>
                    <Icons icon={rightarrow} />
                </Button>
            </div>
        </div>
    )
}

export default carosal