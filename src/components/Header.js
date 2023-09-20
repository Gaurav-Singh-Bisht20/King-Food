import { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Title= ()=>{
    //logo of the website 
    return (
     <div className=" h-20">
     <img className =" h-full"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTje1NxRiimUMR1JfIXlZIqVPd_9obRBnvnsQ&usqp=CAU"></img>
     </div>
    )
 } 

const Header= ()=>{
    const[isLoggedIn,setLoggedIn]=useState();  // login button toggle using custom hooks
    const cartItems =useSelector((store)=>store.cart.item); // subscribing to redux store by useSelector hook which is provided by react-redux
    console.log(cartItems);
    return (
        <div className="flex justify-between items-center px-20 bg-red-100 "> 
            <Title/>
            <div className=" flex gap-28 ">
                <ul className=" flex gap-5  items-center">
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/About">About</Link></li>
                    <li><Link >Wallet</Link></li>
                    <li><Link to="/cart" >
                            <div className="flex gap-2 ">
                                <img className ='h-5' src="https://cdn-icons-png.flaticon.com/128/1170/1170576.png?ga=GA1.1.1309768789.1684076274"></img>
                                <p data-testid="cart">{cartItems.length}</p>
                            </div>
                        </Link></li>
                </ul>
            
            <div className=" flex gap-5 item-center ">
            {
                /* conditional rending of login button based on isLoggenIn status */
                isLoggedIn ?(<button onClick={()=>setLoggedIn(false)}>logout</button>):(<button onClick={()=>setLoggedIn(true)}>login</button>)
            }
            <Link to="/notification"><img className="h-6 items-center" src="https://img.icons8.com/?size=512&id=11642&format=png"></img></Link>
            </div>
            </div>
        </div>
    )
}

export default Header;