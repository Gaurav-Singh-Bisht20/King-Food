import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL } from '../config';
import { json, useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import axios from 'axios';
const RestaurantMenu = () => {
    const parma= useParams();
    const {id}=parma;
    const [restaurant,setRestaurant]=useState(id);
    console.log(`use param id is ${id}`);
    console.log(parma);
    useEffect(()=>{
        getRestaurantMenu();
    },[]);

    const restaurantId = 69447; // Replace with the actual ID
    // await getRestaurantMenu(restaurantId);


    async function getRestaurantMenu(id) {
      try {
        const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.351793&lng=78.0095493&restaurantId=${id}`);
    
        if (response.status === 200) {
          const data = response.data;
          console.log(data); // Log the entire response for analysis
    
          if (data.statusCode === 0) {
            const restaurantInfo = data.data.cards[0].card.card.info;
    
            console.log(restaurantInfo);
            setRestaurant(restaurantInfo);
    
            if (restaurantInfo.cloudinaryImageId) {
              // Construct the image URL only if cloudinaryImageId is defined
              const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantInfo.cloudinaryImageId}`;
              console.log('Image URL:', imageUrl);
    
              // Fetch the image using imageUrl
              // Example: const imageResponse = await axios.get(imageUrl);
              // You can then use imageResponse to display or process the image as needed.
            } else {
              console.log('cloudinaryImageId is not available');
            }
          } else {
            console.log('Response status is not as expected');
          }
        } else {
          console.log('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    

      
  return (!restaurant)?<Shimmer/>: (
    <div className='restaurantDetails container'>
        <div className='RestaurantMenuCard'>
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            <h1>{restaurant.name}</h1>
            <h2>restaurant id{id}</h2>

        </div>
        {/* <div className='Menu'>
        {console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card?.card?.itemCards)}
        </div> */}

    </div>
  )
}

export default RestaurantMenu