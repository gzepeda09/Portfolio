import { useState } from 'react'

import Hero from './components/hero.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hero />
      </div>

    </>
  )
}

export default App;