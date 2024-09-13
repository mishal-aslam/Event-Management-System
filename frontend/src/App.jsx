import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Exhibition from './components/Exhibition'
import Industry from './components/Industry'
import Company from './components/Company'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Exhibition /> */}
   {/* <Industry /> */}
   <Company />
    </>
  )
}

export default App
