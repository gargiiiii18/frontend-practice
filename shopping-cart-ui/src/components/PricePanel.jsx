"use client"
import React from 'react'

const PricePanel = ({price}) => {

    // console.log(totalPrice);
    
  return (
    <div className='bg-blue-300 rounded-2xl my-2 p-6 flex justify-center items-center shadow-sm'>
        <h1 className='text-xl text-center font-bold text-blue-900'>Total Price: ₹{price}</h1>
    </div>
  )
}

export default PricePanel