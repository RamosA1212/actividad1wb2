import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './Components/Contador'
import Cards from './Components/Cards'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <h1>Anime Recomendados</h1>
      <Cards count={count}/>
      <div class="contenedor">
      
      <Contador setCount={setCount} count={count}/>
      </div>
    </>
  )
}

export default App
