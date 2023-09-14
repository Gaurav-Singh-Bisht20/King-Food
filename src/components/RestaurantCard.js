import { IMG_CDN_URL } from "../config";
import React ,{ useContext } from "react";
import userContext from "../utils/userContext";
const RestaurantCard=({name,cloudinaryImageId,avgRating,costForTwo,cuisines})=>{
    const {user}=useContext(userContext);

    return(
    <div className= "bg-white flex flex-col rounded-lg h-96 w-72 flex flex-col shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-[-10px] " >
        <div className="h-48">
            <img className="w-full h-full object-cover rounded-t-lg" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        </div>
        <div className="flex-grow p-4 overflow-hidden">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600">{costForTwo}</p>
            <p className="text-gray-600">{cuisines.join(",")}</p>
            <p className="text-yellow-500">&#9733;{avgRating}</p>
            <p>{user.name}</p>
        </div>
    </div>
    
    )
}

export default RestaurantCard;