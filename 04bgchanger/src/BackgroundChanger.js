import {useState} from "react"
const BackgroundChanger = ({btncolor}) => {
    const [color,setColor] = useState(null);
    const changer = ()=>{
        setColor(btncolor)
        console.log(btncolor)

    }
    return (  
        <>
  <button onClick={changer}
    type="button"
    className="-500 rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    style={{backgroundColor: btncolor}}
  >
    {btncolor}
  </button>

        </>
    );
}
 
export default BackgroundChanger;