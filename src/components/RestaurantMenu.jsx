import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL } from '../config';
import {  useParams } from 'react-router-dom'
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/sliceCart';
import { useDispatch } from 'react-redux';



const RestaurantMenu = () => {
    const param= useParams();
    const {resId}=param;
    console.log(resId);
    const [restaurant,menu] =useRestaurant(resId);

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
      dispatch(addItem(item));
    }
   
   
  return (!restaurant)? < Shimmer/>: (
    <div className='flex w-3/4 justify-evenly bg-neutral-300 mx-auto my-8 rounded-lg'>
        <div className=' h-80 '>
           
            <img className='h-3/4 mt-5' src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            <h1>{restaurant.name}</h1>
            <h2>restaurant id{resId}</h2>
            {/* <button className='p-2 m-5 bg-green-500' onClick={()=>{
              handleAddItem()
            }}>Add Item</button> */}

        </div>
        
          
            <div className=''>
            <h1 className='p-4 m-5 bg-yellow-200'>Menu</h1>
            <ul>
              {menu === null ? <Shimmer /> : (
                (menu && typeof menu === 'object') ? (
                  Object.values(menu)?.slice(0, 20).map((item) => (
                    <li className="flex justify-between items-center" key={item.card.info.id}>
                      {item.card.info.name} - 
                      <button className='p-2 m-5 bg-green-500' onClick={() => { handleAddItem(item); }}>
                        Add Item
                      </button>
                    </li>
                  ))
                ) : (
                  <p>Menu is not an object.</p>
                )
              )}
            </ul>
          </div>


    </div>
  )
}

export default RestaurantMenu