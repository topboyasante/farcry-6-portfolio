import React from 'react'

const Features:React.FC = () => {
  return (
    <main className='w-screen lg:h-screen bg-[rgb(4,0,0)] p-5 features text-[#faa937] '>
        <section className="flex justify-center items-center w-full h-full">
            <section className='lg:w-[80%] mx-auto'>
                        <h1 className="text-bn text-2xl">What makes it so special?</h1>
                        <h1 className="text-bn text-5xl tracking-widest">Features</h1>
                        <hr className="my-5 border-[#faa937]" />
                        <section className='md:text-2xl'>
                            <p>Play as Dani Rojas, a local Yaran, as you fight alongside a modern-day guerrilla revolution to liberate Yara. Play the full game solo or with a friend in co-op.</p>
                            <p>Explore jungles, beaches, and cities on foot, horseback, or in a wide variety of vehicles including boats and Jet Skis as you fight against Castillo’s regime in the most expansive Far Cry to date.</p>
                            <p>Feel the thrill of combat with an arsenal of hundreds of weapons alongside helpful amigos like Chorizo the dog and Guapo the gator.</p>
                            <p>Enjoy all-new content and features added since launch, including four new special operations, free blockbuster crossover missions, 
                            and fan-requested updates such as New Game Plus, Completionist Aid, an extra-hard difficulty mode, and four new loadout slots.</p>
                        </section>
            </section>
        </section>
    </main>
  )
}

export default Features