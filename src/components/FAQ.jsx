import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase-config';


const FAQ = ({ activecard, cardcount }) => {

    const [data, setData] = useState([])

    const colref = collection(db, "FAQs")

    useEffect(() => {
        const getdata = async () => {
            try {
                const doc = await getDocs(colref)
                const fdata = doc.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setData(fdata)
            } catch (error) {
                console.log("error while fetching FAQs data", error)
            }
        }
        getdata()
    }, [])

    return (
        <div className=' bg-card-background text-card-forground  grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.length !== 0 && (
                    data.slice(activecard, activecard + cardcount).map((data) => (
                        <div className=' border h-[400px] sm:h-[400px] px-6 py-10 rounded-lg' key={data.id}>
                            <h3 className=' text-[20px]'>{data && data.question}</h3>
                            <p className='pt-4 text-muted-foreground '>{data && data.answer}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default FAQ