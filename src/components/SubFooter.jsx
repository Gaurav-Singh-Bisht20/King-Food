import  React ,{ useContext } from "react";
import userContext from "../utils/userContext";


const SubFooter = () => {
  const {user}=useContext(userContext);
    // useContext is powerfull hook provided by react to get rid of by props drilling userContext is used for storing global varibles so that it can be passed any where in  the whole app
  return (
    <div className="flex justify-center h-12 w-full bg-yellow-400">
        <h1 className="">this is created by {user.name}</h1>
    </div>
  )
}

export default SubFooter;