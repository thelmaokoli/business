import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Services from './components/Services/Services'
import Snippets from './components/Snippets/Snippets'
import Stories from './components/Stories/Stories' 
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Nav/> 
    <About/>
    <Benefits/>
    <Services/>
    <Snippets/>
    <Stories/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
