import React, { useState ,useEffect} from 'react'

const CompA = () => {
    const[color,setBackground]=useState("red");
    useEffect(()=>{document.body.style.backgroundColor=color},[color]);

  return (
 
    <div >
        
        <button type='button' onClick={()=>setBackground("green")}>click</button>
    </div>
   
  )
}

export default CompA