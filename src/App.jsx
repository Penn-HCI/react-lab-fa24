import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, useToast } from "@chakra-ui/react";
import './App.css'

import Navbar from './Navbar';
import Home from './Home';
import Design from './Design';


function App() {
  const [count, setCount] = useState(0)

  return (
    <ChakraProvider isResettingCSS={false} >
    <Navbar />
    <div>
      <Routes>
        {/* Add more routes as needed */}
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </div>
  </ChakraProvider>
  )
}

export default App
