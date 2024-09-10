import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {
  const [amount, setAmount] = useState(1)
  const [convertedAmount,setConvertedAmount] = useState(0);
  const [fromAmount,setFromAmount] = useState("usd")
  const [toAmount,setToAmount] = useState("inr")
  const data = useCurrencyinfo(fromAmount)
  const currencyKeys = Object.keys(data)
  //console.log(currencyKeys)
  const convert = ()=>{
    console.log(data);
    let result  = (amount * data[toAmount]).toFixed(2);
    setConvertedAmount(result);
    console.log(convertedAmount)
  }
  const swap = ()=>{
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={currencyKeys}
                            currency={fromAmount}
                            onCurrencyChange={setFromAmount}
                            onAmountChange={setAmount}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            onClick={swap}
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currency={toAmount}
                            currencyOptions={currencyKeys}
                            onCurrencyChange={setToAmount}

                            
                        />
                    </div>
                    <button 
                    onClick={convert}
                    type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
