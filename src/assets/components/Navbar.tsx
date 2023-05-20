import React, { ReactNode } from 'react'
import {FaXbox} from 'react-icons/fa'
import {FaPlaystation} from 'react-icons/fa'
import {BsSteam} from 'react-icons/bs'

interface INavLink{
    name:string,
}

const navLinkArray :INavLink[] = [
    {name:"Main"},
    {name:"About"},
    {name:"Features"},
    {name:"Requirements"},
    {name:"Quotes"},
]

const Navbar:React.FC = () => {
  return (
    <nav className='w-full h-full fixed z-[50] p-5'>
       <main className='flex justify-between items-center'>
            <img src="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6FAbjRDg0hWR0OTAxMPRn3/6cd1563c915256ee5f3a68cb266cbcbe/FARCRY6_logo_top_nav-ubioriginal-v1emea.png" alt="farcry6-logo" 
            className='w-[80px] md:w-[150px]'/>

            <section className='hidden lg:flex gap-5'>
                {
                    navLinkArray.map((item):ReactNode => {
                        return <span className='text-[#faa937] uppercase text-bn text-xl tracking-widest'>{item.name}</span>
                    })
                }
            </section>

            <section className='flex gap-5'>
                <FaXbox size={25} color={`#faa937`}/>
                <FaPlaystation size={25} color={`#faa937`}/>
                <BsSteam size={25} color={`#faa937`}/>
            </section>
       </main>
    </nav>
  )
}

export default Navbar