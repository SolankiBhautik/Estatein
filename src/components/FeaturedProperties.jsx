import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import { db } from "../firebase-config.js"
import { collection, getDocs, query } from "firebase/firestore";

import { bildingsvg, showere, bad, leftarrow, rightarrow} from "../assets";


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

    const Icons = ({icon}) => {
        return(
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
                                    <div className="flex items-center gap-4 mb-4">
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