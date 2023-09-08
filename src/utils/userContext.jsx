import { createContext, useContext } from "react";

const userContext= createContext({user:{
    name:"vijay",
    emial:"vijay@gmail.com"

}
})

export default userContext;