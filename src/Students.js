import React from 'react'

const Students = (props) => {

  return (
    <div>
        {
            props.students.map((stu)=>
               <div>
                <h1>Name:{stu.name}</h1>
                <h1>Faculty:{stu.faculty}</h1>
                <h1>College:{stu.college}</h1>
                
               </div>
            )
        }
        
    </div>
  )
}

export default Students