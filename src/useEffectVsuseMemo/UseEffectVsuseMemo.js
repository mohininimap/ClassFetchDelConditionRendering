import React,{useEffect,useState,useMemo} from 'react'

const useEffectVsuseMemo = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('')
    const [data,setData]=useState(100)

    // useEffect(()=>{
    //     console.log(Math.random())
    // },[data])

    const noRender=useMemo(()=>{
        return <div>
   <h1 style={{color:'red'}}>No render again {count} -- {name}</h1>
    <h1 style={{color:'red'}}>useEffect vs useMemo</h1>
        </div>
    },[name])
  return (
    <>
    {noRender}

    <h1>Render it again and again {count}</h1>
    <div>useEffectVsuseMemo</div>
  <button onClick={()=>setCount(count+1)}>CLick Count</button>
  <button onClick={()=>setName('code ...')}>CLick name</button>
     {/* <div>useEffectVsuseMemo</div>
     <h2>{count}</h2>
     <button onClick={()=>setCount(count+1)}>Update Count</button>
     <button onClick={()=>setData(data+1)}>Update Data</button> */}
    </>
   
  )
}

export default useEffectVsuseMemo