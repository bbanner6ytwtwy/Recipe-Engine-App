import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from './pages/Index';
import Food from './pages/Food';
function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
         <Route index element={<Index />} />
         <Route path="/food/:foodName" element={<Food />} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
