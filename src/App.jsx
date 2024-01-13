import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Home} from './components/pages';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App