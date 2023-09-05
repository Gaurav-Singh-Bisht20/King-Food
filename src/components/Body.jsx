import { useState , useEffect } from "react";
import {RestaurantList} from"../config"
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



function filterRestaura(searchInput,allrestaura){
     const filterData=allrestaura.filter((res)=>{
        // console.log(res.info.name)
        return res?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase());
        // console.log(searchInput);
        // console.log(res);
    })
    
    return filterData;
};

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
            <div className="search-box container">
                <div className="location-box">location - clock-tower, dehradun,uk</div>
                <div className="search-box-items">
                <input type="text" className="input-text" placeholder="search" value={searchInput} onChange={(e)=>{
                    setSearchInput(e.target.value);
                }}/>
                <button className="search-btn" onClick={()=>{
                    const data=filterRestaura(searchInput,allrestaura);
                    setRestaura(data);
                }}>search</button>
                </div>
            </div>
            <div className="cardContainer container">{
            restaura.map((Restaurant)=>  {
            return <RestaurantCard {...Restaurant.info} {...RestaurantCard.id}/>
            })}
            
            </div>
        </div>
    )
}

export default Body;