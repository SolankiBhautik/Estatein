import React from 'react'
import { Footer, Navbar, CTA } from '..'

import { Hero, Section1, Section2, Section3 } from '../Services components'

const Services = () => {
    return (
        <div>
            <Navbar />

            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />

            <CTA />
            <Footer />
        </div>
    )
}

export default Services