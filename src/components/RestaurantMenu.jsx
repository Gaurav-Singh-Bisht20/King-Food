import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL } from '../config';
import { json, useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';


const RestaurantMenu = () => {
    const param= useParams();
    const {resId}=param;
    console.log(resId);
    const restaurant =useRestaurant(resId);
   
   
  return (!restaurant)?<Shimmer/>: (
    <div className='restaurantDetails container'>
        <div className='RestaurantMenuCard'>
           
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            <h1>{restaurant.name}</h1>
            <h2>restaurant id{resId}</h2>
            {/* <h3>{res</h3> */}

        </div>
        {/* <div className='Menu'>
        {console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card?.card?.itemCards)}
        </div> */}

    </div>
  )
}

export default RestaurantMenu