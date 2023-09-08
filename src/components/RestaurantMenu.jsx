import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL } from '../config';
import { json, useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';


const RestaurantMenu = () => {
    const param= useParams();
    const {resId}=param;
    console.log(resId);
    const [restaurant,menu] =useRestaurant(resId);
   
   
  return (!restaurant)?<Shimmer/>: (
    <div className='flex justify-evenly mx-16 my-8'>
        <div className='w-11/12 h-80 '>
           
            <img className='h-3/4 ' src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            <h1>{restaurant.name}</h1>
            <h2>restaurant id{resId}</h2>
           

        </div>
        <div className=''>
          <h1>Menu</h1>
          <ul>{
              Object.values(menu).slice(0,20).map((item)=><li key={item.card.info.id} >{item.card.info.name}:{item.card.info.price}</li>)
              }
          </ul>
        </div>

    </div>
  )
}

export default RestaurantMenu