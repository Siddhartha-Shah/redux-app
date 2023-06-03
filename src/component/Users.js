import React from "react";
import { UserContext } from "./CompB";
function Users(){
    return(
        <UserContext.Consumer>
            {value=><h1>{value}</h1>}
        </UserContext.Consumer>
    )
};
export default Users;