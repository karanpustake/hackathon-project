import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Alignment from './components/alignment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alignment/>
    </>
  )
}

export default App
