import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '../../firebase-config.js'
import PropertyCard from '../ui/PropertyCard.jsx'

const PropertyGallery = () => {

    const [propertyData, setPropertyData] = useState([])

    const colref = collection(db, "properties")
    useEffect(() => {
        const getProperties = async () => {
            try {
                const doc = await getDocs(colref)
                const fdata = doc.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setPropertyData(fdata)
            } catch (error) {
                console.log(error)
            }
        }
        getProperties()
    }, [])


    return (
        <>
            <h2 className='text-center pt-12'> All Properties  </h2>
            <div className=' flex gap-4 flex-wrap justify-center pt-6' >
                {
                    propertyData && propertyData.slice(0, 8).map(property => (
                        <PropertyCard prop={property} key={property.id} />
                    ))
                }
            </div>
        </>
    )
}

export default PropertyGallery