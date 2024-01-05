import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Hero } from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
    </Router>
  )
}

export default App