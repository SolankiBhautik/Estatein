
import { Button } from "./ui/button"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Component() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="soft-bg py-4">
            <div className=" flex items-center justify-between ">
                <div className="flex items-center space-x-2">
                    <NavLink to="/">
                        <FlagIcon className="h-8 w-8 text-purple-600" />
                        <span className="text-xl font-bold text-white">Estatein</span>
                    </NavLink>
                </div>
                <div onClick={() => setIsMenuOpen(true)} className={`menubar ${isMenuOpen ?  "translate-x-[0%]" : "translate-x-[96%]"} md:!translate-x-[0%] transition-transform duration-300`}>
                    <div className=" menuitems flex gap-2">
                        <NavLink to="/"><Button onClick={() => setIsMenuOpen(false)} className="bg-black text-white">Home</Button></NavLink>
                        <NavLink to="/aboutus"><Button onClick={() => setIsMenuOpen(false)} className="bg-black text-white">About Us</Button></NavLink>
                        <NavLink to="/properties"><Button onClick={() => setIsMenuOpen(false)} className="bg-black text-white">Properties</Button></NavLink>
                        <NavLink to="/services"><Button onClick={() => setIsMenuOpen(false)} className="bg-black text-white">Services</Button></NavLink>
                    </div>
                    <NavLink to="/contactus" className={`ml-14`}><Button onClick={() => setIsMenuOpen(false)} className="bg-black text-white">Contact Us</Button></NavLink>
                </div>
                <div className="md:hidden z-20 fixed top-4 right-4 flex items-center justify-center">
                    <Button className="bg-black text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <MenuIcon className="icon h-6 w-6 text-white focus:text-black" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}

function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
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
