import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy, limit, getCountFromServer, startAt, where } from 'firebase/firestore'
import { Button } from '../ui/button.jsx'
import { leftarrow, rightarrow } from '../../assets'
import { Icons } from '../'
import { useSearchParams } from 'react-router-dom'
import { db } from '../../firebase-config.js'
import PropertyCard from '../ui/PropertyCard.jsx'

const PropertyGallery = () => {
    const [propertyData, setPropertyData] = useState([])
    const [currentpage, setcurrentpage] = useState(1)
    const [lastPropertyId, setlastPropertyId] = useState(null)
    const [totalpropertie, settotalpropertie] = useState(0)
    const [searchParams] = useSearchParams()
    const perpage = 8
    const colref = collection(db, "properties")

    useEffect(() => {
        const gettotalproperties = async () => {
            try {
                const snapshot = await getCountFromServer(colref)
                const count = snapshot.data().count
                settotalpropertie(count)
            } catch (error) {
                console.log("error while counting: ", error)
            }
        }
        gettotalproperties()
    }, [])

    useEffect(() => {
        const searchQuery = searchParams.get('search') || ''
        const getProperties = async () => {
            try {
                console.log("searchQuery: ", searchQuery)
                let q
                if (searchQuery) {
                    q = query(
                        colref,
                        where('name', '>=', searchQuery),
                        where('name', '<=', `${searchQuery}\uf8ff`),
                        orderBy("name"),
                        limit(perpage),
                        startAt(lastPropertyId)
                    )
                } else {
                    q = query(
                        colref,
                        orderBy("id"),
                        limit(perpage),
                        startAt(lastPropertyId)
                    )
                }
                const doc = await getDocs(q)
                const fdata = doc.docs.map((doc) => doc.data())
                setPropertyData(fdata)
            } catch (error) {
                console.log(error)
            }
        }
        getProperties()
    }, [lastPropertyId, searchParams])

    const handlClick = (direction) => {
        if (direction === "next" && currentpage < totalpropertie / perpage) {
            setcurrentpage(currentpage + 1)
            setlastPropertyId(propertyData[propertyData.length - 1].id)
        } else if (direction === "prev" && currentpage > 1) {
            setcurrentpage(currentpage - 1)
            setlastPropertyId(propertyData[0].id)
        }
    }

    return (
        <>
            <h2 className='h2 text-center pt-12'> All Properties </h2>
            <div className=' flex gap-4 flex-wrap justify-center pt-6' >
                {propertyData && propertyData.map(property => (
                    <PropertyCard prop={property} key={property.id} />
                ))}
            </div>
            <div className="flex justify-center items-center space-x-4 mt-8">
                <Button disabled={!(currentpage > 1)} variant="outline" onClick={() => handlClick("prev")} >
                    <Icons icon={leftarrow} />
                </Button>
                <p> </p>
                <Button disabled={!(currentpage < totalpropertie / perpage)} variant="outline" onClick={() => handlClick("next")}>
                    <Icons icon={rightarrow} />
                </Button>
            </div>
        </>
    )
}

export default PropertyGallery