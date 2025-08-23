"use client"
import React from 'react'
import { useState } from "react";
import ViewMode from './ViewMode'
import EditMode from './EditMode'

const ProfileCard = () => {

    const[userData, setUserData] = useState(
    {
      name: '',
      location: '',
      email: '',
      bio: '',
  }
)
    const [viewMode, setViewMode] = useState(true);

  return (
    <div className='shadow-md rounded-xl relative h-fit w-90'>
        <div className='h-20 bg-gradient-to-r rounded-t-xl from-blue-600 to-blue-800 relative'></div>
        <header className='text-center flex flex-col justify-center items-center'>
            <div className='border-4 flex justify-center items-center border-white absolute top-7 bg-gradient-to-r from-blue-600 to-blue-800 h-25 w-25 p-5 rounded-full'>
                <h1 className='text-center text-4xl text-white'>BC</h1>
            </div>
        </header>
        {
            viewMode ? (
               <ViewMode userData={userData} viewMode={viewMode} setViewMode={setViewMode}/>   
            ) : (
                <EditMode setViewMode={setViewMode} userData={userData} setUserData={setUserData}/>
            )
        }
    </div>
  )
}

export default ProfileCard