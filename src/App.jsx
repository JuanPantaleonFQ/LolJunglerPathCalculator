import { useState } from 'react'
import NavBar from './components/navBarComponent'
import ChampGridComponent from './components/champGridComponent'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar/> 
      <ChampGridComponent/> 
              
    </>
  )
}

export default App
