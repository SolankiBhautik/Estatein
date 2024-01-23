import React, { useEffect } from 'react'
import { Navbar, CTA, Footer } from '..'
import { Heading } from '../ProjectDetail'


import { useParams } from 'react-router-dom'
import { db } from '../../firebase-config'
import { getDoc, doc } from 'firebase/firestore'


const PropertyDetail = () => {

    const { id } = useParams()

    const docRef = doc(db, "properties", id)

    useEffect(() => {
        const getdata = async () => {
            try {
                const docSnapshot = await getDoc(docRef)
                console.log(docSnapshot.data())
            } catch (error) {
                console.log("error while getting data", error)
            }

        }

        getdata()
    }, [])



    return (
        <>
            <Navbar />

            <div>   
                <Heading />
            </div>

            <CTA />
            <Footer />
        </>
    )
}

export default PropertyDetail