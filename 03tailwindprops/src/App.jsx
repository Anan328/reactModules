import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: 'ANAN',
    id: 2323
  }
  const myArray = [1,2,3,4,5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card name="Anaan" details={myObj} array={myArray}/>
      <Card name="Rehmat" />

    </>
  )
}

export default App
