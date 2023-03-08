import React,{useCallback, useState} from 'react'
import UsecallbackChild from './UsecallbackChild';

const UescallbackParent = () => {
    const [counterOne,setcounterOne]=useState(0);
    const [counterTwo,setcounterTwo]=useState([]);

    const IncrementOne=()=>{
        setcounterOne(counterOne+1) 
    }

    const fun=useCallback(()=>{
        console.log("hello ajay")
    },counterTwo)
    
  return (
    <div>
        <UsecallbackChild counterTwo={counterTwo} function={fun}/>
        <button onClick={IncrementOne}>counterOne - {counterOne}</button>
    </div>
  )
}

export default UescallbackParent