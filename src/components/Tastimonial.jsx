import React, { useEffect, useState } from 'react'
import { Icons } from '.'
import { stareicon } from '../assets'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

import { db } from '../firebase-config'
import { getDocs, collection } from 'firebase/firestore'


const Tastimonial = ({activecard, cardcount}) => {
    const [data, setData] = useState([])


    const colref = collection(db, "testimonial")

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
                data &&  data.slice(activecard, activecard + cardcount).map(data => (
                    <div className="bg-gray-800 p-6 rounded-lg w-[330px] flex flex-col" key={data.id}>
                        <div className="flex space-x-1 mb-4">
                            <Icons icon={stareicon} />
                            <Icons icon={stareicon} />
                            <Icons icon={stareicon} />
                            <Icons icon={stareicon} />
                            <Icons icon={stareicon} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{data.heading}</h3>
                        <p className="mb-4 text-muted-foreground">{data.description}</p>
                        <div className="flex items-center mt-auto">
                            <Avatar>
                                <AvatarImage alt="Wade Warren" src={data.profile_img_url} className=" outline " />
                                <AvatarFallback>WW</AvatarFallback>
                            </Avatar>
                            <div className="ml-4">
                                <p className="font-semibold">{data.name}</p>
                                <p className=' text-sm'>{data.location}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Tastimonial