import React from 'react'
import { Navbar, Footer, CTA } from '..'
import { Hero, Values, Achievements, Navigatingcard, Team } from '../aboutus components'

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className='py-10 px-4 md:px-8 lg:px-16 xl:px-32 '>
        <Hero />
        <Values />
        <Achievements />
        <Navigatingcard />
        <Team />
      </div>

        <CTA />
      <Footer />
    </>
  )
}

export default AboutUs