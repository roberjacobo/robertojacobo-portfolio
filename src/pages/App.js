import React from "react"
import Header from '../pages/components/header'
import About from '../pages/components/about'
import Whatido from '../pages/components/whatido'

// markup
const App = () => {
  return (
    <div>
      <Header />
      <div>
        <About />
      </div>
      <div>
        <Whatido />
      </div>
    </div>
  )
}

export default App