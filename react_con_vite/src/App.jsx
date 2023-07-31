import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Inscripcion a React</h1>
      <h2>Complete los siguientes campos</h2>
    <br />
    <hr />
    <form>
      <br />
      <label>Nombre </label>
      <input type="Nombre" />
      <br />
      <label>Apellido </label>
      <input type="Nombre" />
      <br />
      <label>Camada </label>
      <input type="Nombre" />
    </form>
    </>
  )
}

export default App
