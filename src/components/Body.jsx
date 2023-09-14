import { useState , useEffect,useContext} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"; // shimmer is used for making better user  experience untill api data is not  fetched we can show shimmer to  user instead blank page
import { FilterRestaura } from "../config";
import userContext from "../utils/userContext";
import { Link } from "react-router-dom"; // Link component is used for routing it does't refresh the  whole website line a tag



const Body=()=>{
    const [allrestaura,setallrestaura]=useState([]);
    const [restaura,setRestaura]=useState([]);
    const [searchInput,setSearchInput]=useState("kfc");
    useEffect(()=>{
        // useEffect is  react hook which is called after rendring the page , it can to two parameter 1st is fuction,2 is dependency array , any change in depency array will recall the useEffect method, we can put the things in which we want if this value change we need to call useEffect again, if the dependency array is empty useEffect will call only once,if we do not provide dependency array it call after render and after every rerender. so we generally put those things inside this which we needed once or needed when specific value change like API call
        getRestaurants();
    },[]);


    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.351793&lng=78.0095493&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");// API calling by fetch method
        const json= await data.json();
        // console.log(json);
        setRestaura(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setallrestaura(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log(restaura[0].info.name);
    if(restaura?.length===0 && allrestaura?.length !== 0)return <h1>No matching restaura found....please go back</h1>// if we fillterd all restaurant and no one is matching to search result  
    return allrestaura?.length  === 0 ? <Shimmer /> : (
        <div>
            <div className="flex my-8 mx-16 justify-between bg-slate-300 py-5 px-4">
                <div className="bg-white px-3 rounded-md">location - clock-tower, dehradun,uk</div>
                <div className="search-box-items">
                    <input type="text" className="p-1 rounded-md w-96" placeholder="search" value={searchInput} onChange={(e)=>{
                        setSearchInput(e.target.value);
                    }}/>
                    <button className="ml-5 bg-slate-500 text-white px-3 rounded-md p-1 " onClick={()=>{
                        const data=FilterRestaura(searchInput,allrestaura);
                        setRestaura(data);
                    }}>search</button>
                   
                </div>
                 
            </div>
            <div className="flex flex-wrap gap-20 ml-16">{
            
            restaura.map((Restaurant)=>  {
            return( <Link to={"/Restaurant/"+ Restaurant.info.id} key={Restaurant.info.id}><RestaurantCard {...Restaurant.info} /></Link>)
            })}
            
            </div>
        </div>
    )
}

export default Body;