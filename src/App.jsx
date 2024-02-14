import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home, Property, AboutUs, PropertyDetail, Services, ContactUS} from './components/pages';

function App() {
  return (
    <BrowserRouter>
    <div className="xl:px-[8vw] lg:px[6vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/propertiesdetail/:id" element={<PropertyDetail />} />
        <Route path="/properties/propertiesdetail/:id" element={<PropertyDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUS />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App