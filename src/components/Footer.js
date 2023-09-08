import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer=()=>{
    const {user}=useContext(userContext);
    return(
    <div className=" footer">
        <div className="footer-items container">
        <h1>footer</h1>
        <h1>this is created by {user.name}</h1>

        </div>
    </div>
    )
}

export default Footer;