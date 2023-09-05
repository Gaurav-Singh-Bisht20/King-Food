import { useState } from "react"
import { Link } from "react-router-dom"
import About from "./About"

const Title= ()=>{
    return (
     <div className="logo">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTje1NxRiimUMR1JfIXlZIqVPd_9obRBnvnsQ&usqp=CAU"></img>
     </div>
    )
 } 

const Header= ()=>{
    const[isLoggedIn,setLoggedIn]=useState();
    return (
        <div className="header container"> 
            <Title/>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li>wallet</li>
                    <li>cart</li>
                </ul>
            </div>
            <div className="login">
            {
                isLoggedIn ?(<button onClick={()=>setLoggedIn(false)}>logout</button>):(<button onClick={()=>setLoggedIn(true)}>login</button>)
            }
            <Link to="/notification"><img src="https://img.icons8.com/?size=512&id=11642&format=png"></img></Link>
            </div>
        </div>
    )
}

export default Header;