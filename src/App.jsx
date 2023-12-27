

import Hero from './components/hero.jsx'
import AboutMe from './components/aboutme.jsx'


function App() {
  

  return (
    <>
      <div>
        <section id='hero' className=" py-20 md:py-40 sm:py-60">
        <Hero />
        </section>
        <section className="bg-red-950 text-center py-80  ">
        <AboutMe />
        </section>
      </div>

    </>
  )
}

export default App;