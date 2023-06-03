import React from 'react'
import Students from './Students'
const App = () => {
  const arr=[
    {name:"Siddhartha",faculty:"management",college:"Kist"},
    {name:"Dips",faculty:"Science",college:"DAV"},
    {name:"Himal",faculty:"management",college:"VS Niketan"}
  ];
  return (
    <div>
      <Students students={arr}/>
    </div>
  )
}

export default App