import React, { ReactNode } from 'react'

interface GameplayImage{
    url:string
}

const gameplayImages:GameplayImage[] = [
    {url:"https://cdn.akamai.steamstatic.com/steam/apps/2369390/ss_d3b78bb05886f9961869b03701f5920537e0decc.1920x1080.jpg?t=1683827881"},
    {url:"https://media.comicbook.com/2021/08/far-cry-6-1281105.jpeg?auto=webp"},
    {url:"https://www.gameinformer.com/sites/default/files/styles/full/public/2021/05/28/28740e4e/far_cry_6.jpg"},
    {url:"https://cdn.neowin.com/news/images/uploaded/2021/05/1622223415_shredder.jpg"},
    {url:"https://images.pushsquare.com/2a96db9debd3e/far-cry-6.large.jpg"},
    {url:"https://gamingbolt.com/wp-content/uploads/2021/05/far-cry-6-image-6.jpg"}
]

const Gameplay:React.FC = () => {
  return (
    <main className='w-full h-full bg-[#f1e5d0]'>
        <section className="grid grid-cols-1 md:grid-cols-2">
            {gameplayImages.map((item):ReactNode=>{
                return(
                    <img src={item.url} alt="gameplay" className='col-span-1'/>
                )
            })}
        </section>
    </main>
  )
}

export default Gameplay