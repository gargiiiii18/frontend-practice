"use client"
import React, { useEffect, useState } from 'react'
import {cartData} from '../data/cartData'
import PricePanel from './PricePanel'

const product = () => {

    const [cartItems, setCartItems] = useState(cartData);

    // console.log(cartItems);
    
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id != id));
    }

    const increment = (id) => {
        setCartItems(prev => (
            prev.map(item => item.id === id ? 
                {...item, quantity: item.quantity+1} :
                item
            )

        ))

    }

    const decrement = (id) => {
        setCartItems(prev => (
            prev.map(item => (item.id === id && item.quantity>1) ? 
                {...item, quantity: item.quantity-1} :
                item
            )

        ))

    }

    let totalPrice = cartItems.reduce((total, item) => total + item.price*item.quantity, 0);


  return (
     <div className='m-2 p-4 flex flex-col gap-4'>
    {cartItems.map(item => (
       
        <div key={item.id} className='bg-blue-100 rounded-2xl m-1 p-4 w-80 md:w-full flex flex-col md:flex-row gap-10 shadow-sm'>
            <div className='bg-white rounded-2xl flex justify-center items-center shadow-sm'>
                <img className='h-[150px] sel rounded-2xl' src={item.imageUrl} alt="" />
            </div>
            <div className='flex flex-col gap-4'>
                {/* <img className='h-[150px] rounded-2xl' src={item.imageUrl} alt="" /> */}
                <h1 className='font-semibold text-black text-md'>{item.name}</h1>
                <p className='text-gray-600 text-sm mx-1 my-3'>{item.description}</p>
                <div className='flex flex-col gap-6 md:flex-row md:w-90 justify-center md:justify-between md:items-center'>
                    <h2 className='font-semibold text-blue-900 text-lg'>₹{item.price}</h2>
                    <div className='flex gap-15 justify-center items-center'>
                    <div className='flex gap-2 justify-around items-center py-2 w-28 px-4 rounded-2xl bg-blue-200'>
                        <button onClick={() => {increment(item.id)}} className='text-center bg-transparent text-blue-900 font-semibold'>+</button>
                        <p className='bg-white w-10 p-1 rounded-sm text-black text-center text-sm'>{item.quantity}</p>
                        <button onClick={() => {decrement(item.id)}} className='text-center text-blue-900 font-semibold'>-</button>
                    </div>
                    <button onClick={() => { removeItem(item.id) }} className=' px-3 py-2 bg-red-500 rounded-xl text-sm font-semibold text-white'>Remove</button>
                    </div>
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