import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Features from './assets/components/Features'
import SysRequirements from './assets/components/SysRequirements'
import Gameplay from './assets/components/Gameplay'
import SeasonPass from './assets/components/SeasonPass'
import Footer from './assets/components/Footer'

const App:React.FC = () => {
  return (
   <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <SysRequirements/>
      <Gameplay/>
      <SeasonPass/>
      <Footer/>
   </main>
  )
}

export default App