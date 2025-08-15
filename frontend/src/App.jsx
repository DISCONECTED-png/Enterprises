import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footers from './components/Footer'
import { Routes,Route } from "react-router-dom";
import Centrifugal from './components/centrifugal'
import Tubeaxial from './components/Tubeaxial'
import Induced from './components/Induced'
import Furnace from './components/Furnace'
import Shredding from './components/Shredding'
import Dustcollection from './components/Dustcollection'
import ScrollToTop from './components/Scrolltotop'
import ScrollToSection from './components/Scrolltosection'
import HeatPumping from './components/heatpump'
import OilOutflowHeater from './components/oiloutflow'
import Impeller from './components/impeller'
function App() {
  return (
    <>
      <Navbar/>
      <ScrollToTop/>
      <ScrollToSection/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/centrifugal' element={<Centrifugal/>}/>
      <Route path='/tubeaxialfans' element={<Tubeaxial/>}/>
      <Route path='/inducedandforceddraft' element={<Induced/>}/>
      <Route path='/furnace' element={<Furnace/>}/>
      <Route path='/dustcollection' element={<Dustcollection/>}/>
      <Route path='/Shredding' element={<Shredding/>}/>
      <Route path='/heatpumping' element={<HeatPumping/>}/>
      <Route path='/oiloutflow' element={<OilOutflowHeater/>}/>
      <Route path='/impeller' element={<Impeller/>}/>
      </Routes>
      <Footers/>
    </>
  )
}

export default App
