import React, { useState, useEffect } from 'react'


import { Navbar, CTA, Footer } from '..'
import { Heading, ImageCarosal, Detail, Form, Pricing } from '../ProjectDetail'


import { useParams } from 'react-router-dom'
import { db } from '../../firebase-config'
import { getDoc, doc } from 'firebase/firestore'


const PropertyDetail = () => {

    const { id } = useParams()
    const [data, setData] = useState([])

    const docRef = doc(db, "properties", id)

    useEffect(() => {
        const getdata = async () => {
            try {
                const docSnapshot = await getDoc(docRef)
                setData(docSnapshot.data())
            } catch (error) {
                console.log("error while getting data", error)
            }
        }

        getdata()
    }, [])



    return (
        <>
            <Navbar />

            <div className="p-4 md:p-6 lg:p-12">
                <Heading
                    name={data.name}
                    location={data.location}
                    price={data.price}
                />
                <ImageCarosal
                    images={data.images}
                />
                <Detail
                    description={data.description}
                    bedrooms={data.bedrooms}
                    bathrooms={data.bathrooms}
                    size={data.size}
                    features={data.features}
                />
                <Form
                    name={data.name}
                />
                <Pricing
                    price={data.price}
                    additional_fees={data.additional_fees}
                    monthly_costs={data.monthly_costs}
                    total_initial_costs={data.total_initial_costs}
                    monthly_expenses={data.monthly_expenses}
                />
            </div>
            <CTA />
            <Footer />
        </>
    )
}

export default PropertyDetail