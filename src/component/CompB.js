import React from 'react'
import Users from './Users';
export const UserContext=React.createContext();

const CompB = () => {
  return (
    
 
<UserContext.Provider value="Read">
        <Users/>
        </UserContext.Provider>
  
  )
}



export default CompB