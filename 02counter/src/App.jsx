import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15);
  // let counter = 15;
  const addValue = ()=>{
  // counter+=1;
  if(counter < 20){
    setCounter(counter+=1)
    setCounter(counter+=1) 
    // this will only work once no matter how much we repeat it.
    // Because useState work in batches and sends them togther as same batch
    // to handle this we use 
    setCounter((prevCounter)=> prevCounter + 1)
  }
  //console.log(counter)
  }

  const decValue = ()=>{
    if(counter != 0){
      setCounter(counter-=1)
    }
  }

  return (
    <>
     <h1>React App</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={decValue}>Decrease value</button>
    </>
  )
}

export default App
