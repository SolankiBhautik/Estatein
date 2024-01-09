import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { db } from "../firebase-config.js"
import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";




export default function Component() {
    const [data, setdata] = useState([])
    const [activecard, setactivecard] = useState(0)

    
    const colref = collection(db, "properties")

    useEffect(() => {
        const getdata = async () => {
            try {
                const doc = await getDocs(query(colref))
                const fdata = doc.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setdata(fdata)
            } catch (error) {
                console.log(error)
            }
        }
        getdata()
    }, [])


    const handleNextClick = async() => {
        if(activecard === data.length - 1) {
            setactivecard(0)
            console.log("index : ", activecard);
        }
        else{
            setactivecard(prev => prev + 1)
            console.log("index : ", activecard);
        }
    }

    const handleprevClick = () => {
        if(activecard === 0) {
            setactivecard(data.length - 1)
            console.log("index : ", activecard);    
        }
        else{
            setactivecard( prev => prev === 0 ? data.length - 1 : prev - 1)
            console.log("index : ", activecard);
        }
    }

    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" });

    const cardcount = isMobile? 1 : isTablet? 2 : 3;

    return (
        <div key="1" className="bg-[#0f172a] text-white p-12 ">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="mb-12 flex justify-between items-center">
                <span>
                    Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes
                    and investments available through Estatery. Click 'View Details' for more information.
                </span>
                <Button variant="outline" className=" text-black">All Properties</Button>
            </p>
            <div className=" grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                {
                    data.length !== 0 && (
                        data.slice(activecard, activecard + cardcount).map((prop, index) => (
                        <div key={index} className="property-card flex flex-col  bg-gray-800 text-white rounded-lg overflow-hidden  max-w-[400px]">
                            <img
                                alt="Seaside Serenity Villa"
                                className="w-full h-48 object-cover"
                                height="200"
                                src={prop.images[0]}
                                style={{
                                    aspectRatio: "300/200",
                                    objectFit: "cover",
                                }}
                                width="300"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-3">{prop.id}</h3>
                                <p className="mb-4">{prop.description}
                                    <a className="text-violet-600" href="#">
                                        Read More
                                    </a>
                                </p>
                                <div className="flex items-center space-x-2 mb-4">
                                    <Badge variant="secondary">4-Bedroom</Badge>
                                    <Badge variant="secondary">3-Bathroom</Badge>
                                    <Badge variant="secondary">1-Villa</Badge>
                                </div>
                                <p className="font-semibold mb-4">Price $550,000</p>
                                <Button variant="default">View Property Details</Button>
                            </div>
                        </div>
                    )))
                }
            </div>
            <div className="flex justify-center items-center space-x-4 mt-8">
                <Button variant="ghost" onClick={handleprevClick}>
                    Prev
                </Button>
                <p> </p>
                <Button variant="ghost" onClick={handleNextClick}>
                    Next
                </Button>
            </div>
        </div>
    )
}