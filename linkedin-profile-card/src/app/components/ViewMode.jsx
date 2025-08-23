"use client"
import React from 'react'

const ViewMode = ({userData, setViewMode}) => {
    
    console.log(userData);
    
  return (
    <section className='pt-13 flex flex-col gap-1 justify-center items-center'>
            <h1 className='text-2xl text-black font-bold'>{userData.name}</h1>
            <p className='text-md text-gray-500'>{userData.location || 'New Mexico, ABQ'}</p>
            <p className='text-sm text-blue-700'>{userData.email || 'belcap@meowmail.com'}</p>
            <div className='bg-gray-100 p-4 w-80 mt-3 h-fit rounded-lg overflow-hidden'>
                <p className='text-sm'>
                {
                 userData.bio ||    
                'Passionate about creating user-friendly web applications with modern technologies. 5+ years of experience in JavaScript, React, and Node.js. Love solving complex problems and contributing to open-source projects.'
                }           
                </p>
            </div>
            <button onClick={(prev) => setViewMode(!prev)} className='bg-gradient-to-r from-blue-600 to-blue-800 m-3 p-3 rounded-3xl text-white text-sm font-semibold'>Edit Profile</button>
        </section>
  )
}

export default ViewMode