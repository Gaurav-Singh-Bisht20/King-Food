import  React ,{ useContext } from "react";
import userContext from "../utils/userContext";


const SubFooter = () => {
    const {user}=useContext(userContext);
  return (
    <div className="flex justify-center h-12 w-full bg-yellow-400">
        <h1 className="">this is created by {user.name}</h1>
    </div>
  )
}

export default SubFooter;