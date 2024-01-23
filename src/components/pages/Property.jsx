import React from 'react'
import { Navbar, Footer, CTA } from '..'
import { Header, PropertyGallery, Form } from '../property components'

const Property = () => {
  return (
    <div>
        <Navbar />

        <Header />
        <PropertyGallery />
        <Form />
        <CTA />
        <Footer />
    </div>
  )
}

export default Property