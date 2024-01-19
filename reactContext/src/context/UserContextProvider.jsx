import React, { useState } from "react";
import { userContext } from "./user.context";

const userContextProvider  = ({children})=>{

    const [user , setUser] = useState(null);
     return (
        <userContext.Provider value={{user , setUser}}>


        {/* children mtlb jo bhi aa rha hai vo as its pass krdo */}
        {/* what value u are accssing is by taking props */}
        {children}
        
        </userContext.Provider>
     )
}

export default userContextProvider