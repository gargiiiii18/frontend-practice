"use client"
import React, { useState } from 'react'

const Accordian = ({id, title, info}) => {

  const [isOpen, setIsOpen] =  useState(false); 

  return (
      <div className='rounded-lg bg-blue-200' key={id}>
        <div className='bg-blue-950 flex justify-between rounded-lg px-2 py-3'>
            <h1 className='text-md md:text-lg font-semibold text-white'>{title}</h1>
                <button onClick={() => {setIsOpen(prev => !prev)}} className=''>
                { !isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#bfdbfe' }} className=" size-6">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" style={{ color: '#bfdbfe' }} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
                )
                    }
                </button>
        </div>
        <div className={` ${!isOpen ? 'max-h-0 overflow-hidden' : ''}`}>
        <p className='p-3'>{info}</p>
        </div>
    </div>
  )
}

export default Accordian