import React from 'react'
import { Label } from './label'
import { Input } from './input'

const Forminput = ({ label, placeholder, type, id }) => (
    <div className='flex gap-2 flex-col'>
        <Label htmlFor={id} className="text-[20px]">{label}</Label>
        <Input type={type} id={id} placeholder={placeholder} className=" text-xl p-3 h-auto" />
    </div>
)

export default Forminput