import React from 'react'
import CartCard from './CartCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { clearCart } from '../utils/sliceCart';
import { Link } from 'react-router-dom';



const CartPage = () => {
    const cartItems=useSelector((store)=>store.cart.item)
    const dispatch=useDispatch();
    const clearCartItem=()=>{
    dispatch(clearCart());
  }
    
  return cartItems.length>0?(
    <div className='flex w-11/12 bg-slate-50 mx-20 my-10 py-10 justify-between'>
        <div className='flex flex-col gap-3 justify-around'>
            <h1 className='mx-20  p-2 bg-gray-300 text-center'>cart items-{cartItems.length}</h1>
            {cartItems.length>0?<button className='bg-red-500 p-2 rounded-sm mx-20 ' onClick={(item)=>clearCartItem()}>clear cart</button>:<p className='p-2 rounded-sm mx-20 bg-blue-400'>Cart is empty</p>}
            <div className='flex flex-col gap-3 '>{
                cartItems.map((item)=> <CartCard {...(item?.card?.info)}/>)
              }
            </div>
        </div>

        <div className=' flex flex-col mx-20 w-64  bg-pink-200 '>
          <h1 className='text-lg text-center   bg-blue-200 '>Order Detail</h1>
          <p>Bag total</p>
          <p>Discount</p>
          <p>Cupon code</p>
          <p>Delivery Fee</p>
          <p>Sub Total </p>
        </div>
    </div>):<div className=' flex flex-col justify-between items-center w-11/12 mx-20 h-60 bg-slate-300 my-10'>
              <h1 className='text-4xl font-bold bg-slate-500 p-4 text-center'>Your cart is empty</h1>
              <Link to={"/"} ><h1 className=' bg-green-700 px-auto p-4 text-center'>Continue Shoiping</h1></Link>
    </div>

}

export default CartPage