import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar, Hero, FeaturedProperties } from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <FeaturedProperties />
    </Router>
  )
}

export default App