"use client"
import React, { useEffect, useState } from 'react'
import {cartData} from '../data/cartData'
import PricePanel from './PricePanel'

const totalPrice = cartData.reduce((total, itemPrice) => total + itemPrice.price, 0);

const product = () => {

    const [cartItems, setCartItems] = useState(cartData);

    const removeItem = (id) => {
        cartItems.find(item => item.id === id);
        console.log(id);
        
        
    }

  return (
     <div className='m-2 p-4 flex flex-col gap-4'>
    {cartItems.map(item => (
       
        <div key={item.id} className='bg-blue-100 w-150 rounded-2xl m-1 p-4 flex gap-10 shadow-sm'>
            <div className='bg-white rounded-2xl shadow-sm'>
                <img className='h-[150px] rounded-2xl' src={item.imageUrl} alt="" />
            </div>
            <div className=''>
                <h1 className='font-semibold text-black text-md'>{item.name}</h1>
                <p className='text-gray-600 text-sm mx-1 my-3'>{item.description}</p>
                <div className='flex w-90 justify-between items-center'>
                    <h2 className='font-semibold text-blue-900 text-lg'>₹{item.price}</h2>
                    <div className='flex gap-2 justify-around items-center py-2 w-28 px-4 rounded-2xl bg-blue-200'>
                        <button className='text-center bg-transparent text-blue-900 font-semibold'>+</button>
                        <p className='bg-white w-10 p-1 rounded-sm text-black text-center text-sm'>qty</p>
                        <button className='text-center text-blue-900 font-semibold'>-</button>
                    </div>
                    <button onClick={() => { removeItem(item.id) }} className=' px-3 py-2 bg-red-500 rounded-xl text-sm font-semibold text-white'>Remove</button>
                </div>
            </div>
        </div>

    ))  
}
<PricePanel price={totalPrice}/>
    </div>  
  )
}

export default product