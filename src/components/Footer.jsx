
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="bg-black">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col space-y-4 mb-10 lg:mb-0">
                        <div className="flex items-center space-x-2">
                            <FlagIcon className="h-8 w-8 text-purple-600" />
                            <span className="text-white text-2xl font-bold">Estatein</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MailIcon className="text-gray-400" />
                            <Input
                                className="bg-[#333333] text-white placeholder-gray-400"
                                placeholder="Enter Your Email"
                                type="email"
                            />
                            <Button className="bg-purple-600 text-white">
                                <SendIcon className="text-white" />
                            </Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold text-lg">Home</span>
                            <Link className="text-gray-400" to="/">
                                Hero Section
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Features
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Properties
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Testimonials
                            </Link>
                            <Link className="text-gray-400" to="/">
                                FAQ's
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold">About Us</span>
                            <Link className="text-gray-400" to="/">
                                Our Story
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Our Works
                            </Link>
                            <Link className="text-gray-400" to="/">
                                How It Works
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Our Team
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Our Clients
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold">Properties</span>
                            <Link className="text-gray-400" to="/">
                                Portfolio
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Categories
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold">Services</span>
                            <Link className="text-gray-400" to="/">
                                Valuation Mastery
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Strategic Marketing
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Negotiation Wizardry
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Closing Success
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Property Management
                            </Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-white font-semibold">Contact Us</span>
                            <Link className="text-gray-400" to="/">
                                Contact Form
                            </Link>
                            <Link className="text-gray-400" to="/">
                                Our Offices
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">©2023 Estatein. All Rights Reserved. Terms & Conditions</p>
                        <div className="flex space-x-4 mt-4 lg:mt-0">
                            <FacebookIcon className="text-gray-400 h-6 w-6" />
                            <LinkedinIcon className="text-gray-400 h-6 w-6" />
                            <TwitterIcon className="text-gray-400 h-6 w-6" />
                            <YoutubeIcon className="text-gray-400 h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function FlagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}


function LinkedinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}


function MailIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function SendIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}


function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}


function YoutubeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
        </svg>
    )
}
