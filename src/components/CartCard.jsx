import React from 'react'
import { IMG_CDN_URL } from "../config";


const CartCard = ({name,imageId  ,price}) => {
  
  
  return (
    <div className="bg-white  rounded-lg h-48 w-72 flex flex-col shadow-xl mx-20 " >
        <div className="h-3/5">
            <img className="w-full h-full object-cover rounded-t-lg" src={IMG_CDN_URL + imageId} alt={name} />
        </div>
        <div className="flex-grow ">
            <p className="mx-2">{name}</p>
            <h1 className='text-lg mx-2'> price-{price/100}</h1>
        </div>
    </div>
  )
}

export default CartCard