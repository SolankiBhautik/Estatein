
import { useState, useEffect } from "react";

import { db } from "../firebase-config.js"
import { collection, getDocs } from "firebase/firestore";

import PropertyCard from "./ui/PropertyCard";



export default function FeaturedProperties({activecard, cardcount}) {
    const [data, setData] = useState([])

    const colref = collection(db, "properties")

    useEffect(() => {
        const getdata = async () => {
            try {
                const doc = await getDocs(colref)
                const fdata = doc.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setData(fdata)
            } catch (error) {
                console.log(error)
            }
        }
        getdata()
    }, [])

    return (
            <div className=" grid justify-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                {
                    data.length !== 0 && (
                        data.slice(activecard, activecard + cardcount).map((prop, index) => (
                            <PropertyCard prop={prop} key={index} />
                        )))
                }
            </div>
    )
}