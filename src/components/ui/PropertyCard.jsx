import React from 'react'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Icons } from '..'
import { bildingsvg, showere, bad} from "../../assets";
import { Link } from 'react-router-dom';



const PropertyCard = ({prop, index}) => {
    return (
        <div key={index} className="box soft-bg flex flex-col justify-between h-full rounded-lg overflow-hidden  max-w-[400px]">
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
                <div className="flex items-center gap-1 lg:gap-[2px] xl:gap-4 mb-4">
                    <Badge variant="secondary" className=" m-0  box"><Icons icon={bad} /> {prop.bedrooms} Bedrooms</Badge>
                    <Badge variant="secondary" className=" m-0  box"><Icons icon={showere} /> {prop.bathrooms} Bathrooms</Badge>
                </div>
                <div className="flex gap-4 items-center pt-4 mt-auto">
                    <p className="font-semibold"> <span className="text-muted-foreground"> Price</span> <br /> ${prop.price}</p>
                    <Link to={`propertiesdetail/${prop.id}`}><Button variant="default">View Details</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard