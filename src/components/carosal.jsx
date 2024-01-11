import React from 'react'
import { Button } from "./ui/button"
import { useState, useEffect } from "react";
import { collection, getCountFromServer, count } from 'firebase/firestore';
import { useMediaQuery } from "react-responsive";

import { db } from '../firebase-config';

import { leftarrow, rightarrow } from "../assets";
import { FeaturedProperties, Icons } from '.';



const carosal = ({ title, discription, buttonText, card }) => {
    const [activecard, setactivecard] = useState(0)

    const [documentCount, setDocumentCount] = useState(0);

    useEffect(() => {
        const collectionRef = collection(db, 'properties');

        const getcount = async () => {
            try {
                const snapshot = await getCountFromServer(collectionRef);
                const count = snapshot.data().count
                setDocumentCount(count)
            } catch (error) {
                console.log(" error while counting ", error)
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
        <div key="1" className="bg-background text-foreground p-12 ">
            <h2 className="text-4xl font-bold mb-4 text-center sm:text-start">{title}</h2>
            <p className="mb-12 flex justify-between items-center flex-col sm:flex-row gap-4 text-center sm:text-start">
                <span>
                    {discription}
                </span>
                <Button variant="outline">{buttonText}</Button>
            </p>
            
            
            {card ({activecard, cardcount})}
            
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