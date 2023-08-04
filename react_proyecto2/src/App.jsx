import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FuncComponent from './Components/FuncComponents'
import Boton from './Components/boton'
import ParentComponent from './Components/ParentComponent'
import ChildComponent from './Components/ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ChildComponent/>      
      
    </>
  )
}

export default App
