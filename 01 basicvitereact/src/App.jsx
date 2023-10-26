import { useState } from "react";
import Chai from "./chai"

function App() {
  let [counter, Setcounter] = useState(1)
  const addvalue = () => {
    if (counter < 20) {
      counter = Math.floor(Math.random() * 20) + 1;
      Setcounter(counter)
      console.log('Clicked', { counter });
    }
  }
  const removevalue = () => {
    if (counter > 0) {
      counter = counter - 1
      Setcounter(counter)
      console.log('Clicked', { counter });
    }
  }
  return (
    <>
      <h1 >Chai aur codes</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
