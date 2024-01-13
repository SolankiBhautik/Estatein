import React from 'react'
import { Navbar, Hero, Carosal, FeaturedProperties, Tastimonial, FAQ, CTA, Footer } from '../'


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Carosal
                title="Featured Properties"
                discription="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes
            and investments available through Estatery. Click 'View Details' for more information."
                buttonText="All Properties"
                card={FeaturedProperties}
                collectionName="properties"
            />
            <Carosal
                title="What Our Clients Say"
                discription="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
                buttonText="View All Testimonials"
                card={Tastimonial}
                collectionName="testimonial"
            />
            <Carosal
                title="Frequently Asked Questions"
                discription="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
                buttonText="View All FAQ’s"
                card={FAQ}
                collectionName="FAQs"
            />
            <CTA />
            <Footer />
        </>
    )
}

export default Home