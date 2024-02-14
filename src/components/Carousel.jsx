import React from 'react'
import { useState, useEffect } from "react";

import { collection, getCountFromServer } from 'firebase/firestore';
import { useMediaQuery } from "react-responsive";
import { db } from '../firebase-config';

import { Button } from "./ui/button"
import { leftarrow, rightarrow } from "../assets";
import { Icons } from '.';
import { NavLink } from 'react-router-dom';
import Heading from './ui/Heading';



const Carousel = ({ title, discription, buttonText, card, collectionName, height }) => {
    const [activecard, setactivecard] = useState(0)

    const [documentCount, setDocumentCount] = useState(0);

    useEffect(() => {
        const collectionRef = collection(db, collectionName);

        const getcount = async () => {
            try {
                const snapshot = await getCountFromServer(collectionRef);
                const count = snapshot.data().count
                setDocumentCount(count)
            } catch (error) {
                console.log(" error while counting ",  error)
            }
        }
        getcount()
    }, [])

    



    const handleNextClick = async () => {
        if (activecard === documentCount - 1) {
            setactivecard(0)
        }
        else {
            setactivecard(prev => prev + 1)
        }
    }

    const handleprevClick = () => {
        if (activecard === 0) {
            setactivecard(documentCount - 1)
        }
        else {
            setactivecard(prev => prev === 0 ? documentCount - 1 : prev - 1)
        }
    }

    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });

    const cardcount = isMobile ? 1 : isTablet ? 2 : 3;


    return (
        <section >

            <div className='flex items-center justify-between'>
                <Heading
                    heading={title}
                    description={discription}
                />
                <NavLink to="properties"><Button variant="outline" >{buttonText}</Button></NavLink>
            </div>
            <div className={`h-[${height}px]`}>
                {card ({activecard, cardcount})}
            </div>
            <div className="flex justify-center items-center space-x-4 mt-8">
                <Button variant="outline" onClick={handleprevClick}>
                    <Icons icon={leftarrow} />
                </Button>
                <p> </p>
                <Button variant="outline" onClick={handleNextClick}>
                    <Icons icon={rightarrow} />
                </Button>
            </div>
        </section>
    )
}

export default Carousel