import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home, Property, AboutUs, PropertyDetail} from './components/pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Property />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/propertiesdetail/:id" element={<PropertyDetail />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App