import React, { useState } from 'react'
import { IMG_CDN_URL } from "../config";


const CartCard = ({name,imageId  ,price}) => {

const[count,setCount] = useState(1);

const handleCount =()=>{
  setCount(count+1);
}

const handleCountRemove =()=>{
  if(count>1){
  setCount(count-1);
  }
}

  
  
  return (
    <div className="bg-white  rounded-lg h-48 w-72 flex flex-col shadow-xl mx-20 " >
        <div className="h-3/5">
            <img className="w-full h-full object-cover rounded-t-lg" src={IMG_CDN_URL + imageId} alt={name} />
        </div>
        <div className="flex-grow ">
            <p className="mx-2">{name}</p>
            <div  className='text-lg mx-2 flex justify-between'>
            <h1 className='text-lg '> price-{price/100}</h1>
            <div className='flex gap-2'>
              <img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/plus.png" alt="plus" onClick={handleCount}/>
              <button className='bg-slate-300 px-2 '>Qty : {count}</button>
              <img width="24" height="24" src="https://img.icons8.com/ios-filled/50/minus.png" alt="minus" onClick={handleCountRemove}/>
            </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default CartCard