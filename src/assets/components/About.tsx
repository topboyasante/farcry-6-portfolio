import React from 'react'

const About:React.FC = () => {
  return (
    <main className='w-screen lg:h-screen bg-[#040000] p-5'>
        <section className='max-w-[1500px] mx-auto h-full'>
                <section className='flex flex-col lg:flex-row justify-around items-center w-full h-full gap-5'>
                    {/* 1 */}
                    <section className='text-[#faa937] lg:w-[45%]'>
                        <h1 className='text-bn  text-4xl lg:text-6xl text-center'>Welcome to Yara.</h1>
                        <hr className="my-5 border-[#faa937]" />
                        <p>
                          Welcome to Yara, a tropical paradise frozen in time. As the dictator of Yara, Antón Castillo is intent on restoring his nation to its former glory by any means necessary, with his son, Diego, following in his bloody footsteps. Their oppressive rule has ignited a revolution.
                          Play as Dani Rojas, a local Yaran, as you fight alongside a modern-day guerrilla revolution to liberate Yara. Play the full game solo or with a friend in co-op.
                          Explore jungles, beaches, and cities on foot, horseback, or in a wide variety of vehicles including boats and Jet Skis as you fight against Castillo’s regime in the most expansive Far Cry to date.
                          Feel the thrill of combat with an arsenal of hundreds of weapons alongside helpful amigos like Chorizo the dog and Guapo the gator.
                          Enjoy all-new content and features added since launch, including four new special operations, free blockbuster crossover missions, and fan-requested updates such as New Game Plus, Completionist Aid, an extra-hard difficulty mode, and four new loadout slots.
                          There has never been a better time to join millions of players in Yara!
                        </p>
                    </section>
                    {/* 2 */}
                    <section className='lg:w-[45%]'>
                        <img src="https://media.wired.com/photos/615df1ddcc7e602ee200c0c7/4:3/w_1439,h_1079,c_limit/Games-Far-Cry-6-TOP.jpg" alt="yara" 
                        className='w-full rounded'/>
                    </section>
                </section>
        </section>
    </main>
  )
}

export default About 