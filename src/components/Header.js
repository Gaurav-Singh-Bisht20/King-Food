import { useState } from "react"
import { Link } from "react-router-dom"
import About from "./About"

const Title= ()=>{
    return (
     <div className=" h-20">
     <img className =" max-h-full"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTje1NxRiimUMR1JfIXlZIqVPd_9obRBnvnsQ&usqp=CAU"></img>
     </div>
    )
 } 

const Header= ()=>{
    const[isLoggedIn,setLoggedIn]=useState();
    return (
        <div className="flex justify-between items-center px-20 bg-red-100 "> 
            <Title/>
            <div className=" flex gap-28">
                <ul className=" flex gap-5">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link >Wallet</Link></li>
                    <li><Link >Cart</Link></li>
                </ul>
            
            <div className=" flex gap-5 h-6">
            {
                isLoggedIn ?(<button onClick={()=>setLoggedIn(false)}>logout</button>):(<button onClick={()=>setLoggedIn(true)}>login</button>)
            }
            <Link to="/notification"><img className="max-h-full" src="https://img.icons8.com/?size=512&id=11642&format=png"></img></Link>
            </div>
            </div>
        </div>
    )
}

export default Header;