import React,{memo} from 'react'

const UsecallbackChild = ({countertwo,setcountertwo}) => {
  console.log("Use Memo Child Component Call")
  return (
    <div >UsecallbackChild</div>
  )
}

export default memo(UsecallbackChild)