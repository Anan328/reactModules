import {useState} from "react"
function App() {
    const [color,setColor] = useState("white");
    const changer = (e)=>{
    setColor(e.target.value)
    console.log(e.target.value)
    }
    
    document.body.style.backgroundColor = color; // not a good practice but i had not other option ):
  return (
    <div className="App">
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick={changer} value="red"
    type="button"
    className="-500 rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    style={{backgroundColor:"red"}}
  >
    Red
  </button>
  <button onClick={changer} value="yellow"
    type="button"
    className="-500 rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    style={{backgroundColor: "yellow"}}
  >
    Yellow
  </button>
  <button onClick={changer} value="green"
    type="button"
    className="-500 rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    style={{backgroundColor: "green"}}
  >
    Green
  </button>
  <button onClick={changer} value="orange"
    type="button"
    className="-500 rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    style={{backgroundColor: "orange"}}
  >
    Orange
  </button>
  </div>
  </div>
  </div>
  );
}
export default App;
