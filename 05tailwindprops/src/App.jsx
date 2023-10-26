import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 mb-4' >Tailwind Css</h1>
      <div className='w-full h-screen duration-200' 
      style={{backgroundColor:color}}> lorem200</div>
      <Card username="Aniket" btnText="Click me" />
      <Card username="Akshat" btnText="Check me" />
    </>
  )
}

export default App
