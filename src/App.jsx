import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar, Hero, Carosal, FeaturedProperties, Icons } from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Carosal 
        title="Featured Properties"
        discription="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes
        and investments available through Estatery. Click 'View Details' for more information."
        buttonText="All Properties"
        card={FeaturedProperties}
      />
      <Carosal 
        title="What Our Clients Say"
        discription="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        buttonText="View All Testimonials"
        card={Icons}
      />
    </Router>
  )
}

export default App