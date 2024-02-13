import React from 'react'
import { CTA, Footer, Navbar } from '..'
import { Hero, ConntactUs, OfficeLocations, Gallery } from '../contactUS components'

const ContactUS = () => {
  return (
    <div>
        <Navbar />

        <Hero />
        <ConntactUs />
        <OfficeLocations />
        <Gallery />

        <CTA />
        <Footer />
    </div>
  )
}

export default ContactUS