

import Hero from './components/hero.jsx'
import AboutMe from './components/aboutme.jsx'
import Projects from './components/projects.jsx'


function App() {
  

  return (
    <>
      <div>
        
        <section id='hero' className=" py-20 md:py-40 sm:py-60">
        <Hero />
        </section>
        
        <section id='about' className="bg-red-950 text-center py-80  ">
        <AboutMe />
        </section>

        <section id='project' className="text-center py-80  ">
        <Projects />
        </section>
      </div>

    </>
  )
}

export default App;