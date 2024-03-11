import React from 'react'
import Heading from '../ui/Heading'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import Forminput from '../ui/Forminput'
import Dropdown from '../ui/dropdown'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"


const Form = () => {

    const Formdropdown = ({ label, items, className }) => (
        <div className={`flex gap-2 flex-col ${className || ''}`}>
            <Label className="text-[20px]">{label}</Label>
            <Dropdown
                name={label}
                label={label}
                icon={null}
                items={items}
            />
        </div>
    )

    return (
        <div>
            <Heading
                className="mx-12 md:mx-6 mt-12"
                heading="Let's Make it Happen"
                description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
            />
            <div className=' rounded-xl my-12 mx-12 md:mx-6 md:p-12 sm:p-6 p-2 border grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12 '>
                <Forminput
                    type="text"
                    id="first_name"
                    placeholder="Enter First Name"
                    label="First Name"
                />
                <Forminput
                    type="text"
                    id="last_name"
                    placeholder="Enter Last Name"
                    label="Last Name"
                />
                <Forminput
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    label="Email"
                />
                <Forminput
                    type="number"
                    id="phone_number"
                    placeholder="Enter Phone Number"
                    label="Phone Number"
                />

                <Formdropdown
                    label="Property Type"
                    items={['item1', 'item2', 'item3']}
                />
                <Formdropdown
                    label="Property Location "
                    items={['item1', 'item2', 'item3']}
                />
                <Formdropdown
                    label="No. of Bathrooms"
                    items={['item1', 'item2', 'item3']}
                />
                <Formdropdown
                    label="No. of Bedrooms"
                    items={['item1', 'item2', 'item3']}
                />
                <Formdropdown
                    label="Budget"
                    items={['item1', 'item2', 'item3']}
                />


                <RadioGroup defaultValue="email">
                    <p className='text-[22px] text-[800]'>Proffered Connect Method</p>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="email" id="option-one" />
                        <Label htmlFor="option-one" className="text-[18px]">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                        <RadioGroupItem value="phoneNo" id="option-two" />
                        <Label htmlFor="option-two" className="text-[18px]">Phone No.</Label>
                    </div>
                </RadioGroup>


                <div className="grid w-full gap-1.5 col-span-full">
                    <Label htmlFor="message" className="text-[20px]">Your message</Label>
                    <Textarea placeholder="Type your message here." id="message" className="text-[20px] soft-bg" />
                </div>

                <div className='flex gap-2 flex-col sm:flex-row justify-between col-span-full'>
                    <div className='flex  gap-2'>
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                    <div>
                        <Button type="submit" className="w-full text-lg"> SUBMIT </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Form