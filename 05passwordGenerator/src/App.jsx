import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef hook
  const passwordRef = useRef(null);
  // useCallback is for optimization purpose only, we can also work without this
  const passwordGenertor = useCallback(()=>{
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOFQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*+-" ;

    for(let i = 1 ; i<= length; i++){
      let char = Math.floor(Math.random()*str.length);
      pass += str[char];
      // console.log(pass);
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
  const copyClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password)

  },[password])
  useEffect(()=>{
    passwordGenertor()
  },[length,numberAllowed,charAllowed,passwordGenertor]) // dont add passwordGenertor if not using useCallback
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg py-6 px-8 my-8 text-orange-500 bg-gray-400'>
      <h1 className='text-4xl text-center text-white mb-2 my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"  
        value={password} 
        className='outline-none w-full py-1 px-3' 
        placeholder='password' 
        readOnly 
        ref={passwordRef}
        />
        <button 
        onClick={copyClipboard}
        className='outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={15} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput" className='text-white'>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput" className='text-white'>Characters</label>
      </div>
        </div>
      </div>
    </>
  )
}

export default App
