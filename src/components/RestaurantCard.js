import { IMG_CDN_URL } from "../config";
const RestaurantCard=({name,cloudinaryImageId,avgRating,costForTwo,cuisines})=>{
    return(
    <div className="card container">
            <div className="card-photo">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            </div >
            <div className="details">
            <p>{name}</p>
            <p>{costForTwo}</p>
            <p>{cuisines.join(",")}</p>
            <p>&#9733;{avgRating}</p>
            </div>
            
        </div>
    )
}

export default RestaurantCard;