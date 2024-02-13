import Heading from '../ui/Heading'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Checkbox } from '../ui/checkbox'
import { Button } from '../ui/button'
import Forminput from '../ui/Forminput'


const ConntactUs = () => {
    return (
        <div className='p-8'>
            <Heading
                heading="Let's Connect"
                description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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
                    id="phone"
                    placeholder="Enter Phone"
                    label="Phone"
                />
                <div className="grid w-full gap-1.5 col-span-full">
                    <Label htmlFor="message" className="text-[20px]">Your message</Label>
                    <Textarea placeholder="Type your message here." id="message" className="text-[20px] soft-bg" />
                </div>
                <div className='flex gap-2 flex-col sm:flex-row justify-between col-span-full'>
                    <div className='flex  gap-2 pb-2 md:pb-0'>
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

export default ConntactUs