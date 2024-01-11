import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { useState, useEffect } from "react";

import { db } from "../firebase-config.js"
import { collection, getDocs } from "firebase/firestore";

import { bildingsvg, showere, bad} from "../assets";

import { Icons } from ".";


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
            <div className=" grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                {
                    data.length !== 0 && (
                        data.slice(activecard, activecard + cardcount).map((prop, index) => (
                            <div key={index} className="property-card flex flex-col  bg-secondary  rounded-lg overflow-hidden  max-w-[400px]">
                                <img
                                    alt={prop.name}
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
                                    <h3 className="text-2xl font-semibold mb-3">{prop.name}</h3>
                                    <p className="pb-4 text-muted-foreground">{prop.description}
                                    </p>
                                    <div className="flex items-center gap-0 lg:gap-[2px] xl:gap-4 mb-4">
                                        <Badge variant="secondary" className=" m-0 b-1 pl-0"><Icons icon={bad}/> {prop.bedrooms} Bedrooms</Badge>
                                        <Badge variant="secondary" className=" m-0"><Icons icon={showere}/> {prop.bathrooms} Bathrooms</Badge>
                                        <Badge variant="secondary" className=" m-0"><Icons icon={bildingsvg}/> {prop.villa} Villa</Badge>
                                    </div>
                                    <div className="flex gap-4 items-center pt-4">
                                        <p className="font-semibold"> <span className="text-muted-foreground"> Price</span> <br /> ${prop.price}</p>
                                        <Button variant="default">View Details</Button>
                                    </div>
                                </div>
                            </div>
                        )))
                }
            </div>
    )
}