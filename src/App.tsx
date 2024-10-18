import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Design from './components/Design';


function App() {

  return (
    <>
    <Navbar />
    <div>
      <Routes>
      
        {/* Add more routes as needed */}
        <Route path="/react-lab-fa24/" element={<Home />} />
        <Route path="/react-lab-fa24/design" element={<Design />} />
      </Routes>
    </div>
  </>
  )
}

export default App
