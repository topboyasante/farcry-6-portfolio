import React from 'react'
import HeroBG from '../gallery/hero-bg.jpeg'

const Hero:React.FC = () => {
  return (
    <main className='w-full h-screen relative'>
        <img src={HeroBG} alt="farcry-6-hero" className='absolute object-cover w-full h-full'/>
        <div className="w-full h-full absolute z-[10] bg-black opacity-50"></div>
        <section className="absolute w-full h-full z-[20] text-[#faa937]">
          <section className="flex flex-col justify-center items-center w-full h-full">
              <section className='text-center'>
                <h1 className="text-bn text-4xl md:text-8xl tracking-widest">SURVIVE AT ALL COSTS.</h1>
                <h1 className="text-bn text-xl md:text-2xl tracking-widest">Embrace the gritty experience of an improvised modern-day guerrilla and take down a Dictator and his son to free Yara.</h1>
              </section>
              <section className='my-5'>
                <button className='bg-[#faa937] text-[#040000] px-4 py-2 text-xl rounded uppercase tracking-widest'>Buy Now | $69.99</button>
              </section>
          </section>
        </section>
    </main>
  )
}

export default Hero