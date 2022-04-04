import React, { useState } from "react"
import Header from '../pages/components/header'
//import About from '../pages/components/about'
//import Whatido from '../pages/components/whatido'
//import Modalcv from '../pages/components/cvmodal'

import "../styles/index.css"


const App = () => {
  const [modalState, setModalState] = useState(false);
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <Header />
    </div>
  )
}

export default App