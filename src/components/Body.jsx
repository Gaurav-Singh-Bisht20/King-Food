import { useState , useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { FilterRestaura } from "../config";


const Body=()=>{
    const [allrestaura,setallrestaura]=useState([]);
    const [restaura,setRestaura]=useState([]);
    const [searchInput,setSearchInput]=useState("kfc");

    useEffect(()=>{
        getRestaurants();
    },[]);


    async function getRestaurants(){
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.351793&lng=78.0095493&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        // console.log(json);
        setRestaura(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setallrestaura(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log(restaura[0].info.name);
    if(restaura?.length===0 && allrestaura?.length !== 0)return <h1>No matching restaura found....please go back</h1>
    return allrestaura?.length  === 0 ? <Shimmer /> : (
        <div>
            <div className="flex my-8 mx-16 justify-between bg-slate-300 py-5 px-4">
                <div className="bg-white px-3 rounded-md">location - clock-tower, dehradun,uk</div>
                <div className="search-box-items">
                    <input type="text" className="p-1 rounded-md " placeholder="search" value={searchInput} onChange={(e)=>{
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
            return <RestaurantCard {...Restaurant.info} {...RestaurantCard.id}/>
            })}
            
            </div>
        </div>
    )
}

export default Body;