import React from 'react'

const SeasonPass:React.FC = () => {
  return (
    <main className='xl:relative w-full xl:h-screen'>
        <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7CyvoqPQvEaruIh33C3Mt7/d8825f2dfb90ee64b451ae30ee78794d/FC6_SeasonPass_Keyart_desktop.jpg" alt="season-pass" 
        className='xl:absolute object-cover w-full h-full'/>
        <section className="xl:absolute xl:z-[20] bg-[#1c1c1c] text-[#e9e2cf] p-5 xl:top-[30%] xl:left-[2%] w-full xl:w-[35%]">
            <small className='text-bn tracking-widest'>fc6-21-pb-70g023-011</small>
            <hr className="my-5 border-[#e9e2cf]" />
            <h1 className="text-bn text-5xl xl:text-8xl">Season Pass</h1>
            <hr className="my-5 border-[#e9e2cf]" />
            <small className='text-bn text-center tracking-widest'>fm-30-184</small>
            <p className='text-archivo'>Embrace the Far Cry legacy and play as the villains with the FAR CRY® 6 Season Pass. In three separate DLC episodes, take control of Vaas Montenegro, Pagan Min and Joseph Seed (all played by the original cast) and fight to escape their twisted minds. In a second offering, travel back to the distant future of 2007 with the critically acclaimed FAR CRY® 3: Blood Dragon, now also on the newest generations of platforms.</p>
            <button className=' bg-red-700 px-4 py-2 my-5 text-4xl flex justify-center items-center'>
                <p className="text-bn">Learn More</p>
            </button>
        </section>
    </main>
  )
}

export default SeasonPass