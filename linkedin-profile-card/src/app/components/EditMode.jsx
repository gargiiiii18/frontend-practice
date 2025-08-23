"use client"
import React from 'react'

const EditMode = ({userData, setUserData, setViewMode}) => {

    // console.log(userData);
    
  return (
     <section className='pt-13 flex flex-col gap-1 justify-center items-center'>
        <form>
        <div className='flex flex-col gap-1 justify-center items-start'>
        <label className='text-sm text-left text-gray-500'>Full Name *</label>
        <input value={userData.name} onChange={(e) => setUserData({...userData, name:e.target.value})} className='border w-70 border-gray-300 p-1 rounded-lg text-sm'required/>
        </div>
        <div className='flex flex-col gap-1 justify-center items-start'>
        <label className='text-sm text-left text-gray-500'>Location *</label>
        <input value={userData.location} onChange={(e) => setUserData({...userData, location:e.target.value})} className='border w-70 border-gray-300 rounded-lg text-sm p-1'required/>
        </div>
        <div className='flex flex-col gap-1 justify-center items-start'>
        <label className='text-sm text-left text-gray-500'>Email *</label>
        <input value={userData.email} onChange={(e) => setUserData({...userData, email:e.target.value})} className='border w-70 border-gray-300 rounded-lg text-sm p-1' required/>
        </div>
        <div className='flex flex-col gap-1 justify-center items-start'>
        <label className='text-sm text-left text-gray-500'>Bio</label>
        <textarea value={userData.bio} onChange={(e) => setUserData({...userData, bio:e.target.value})} className='w-70 border border-gray-300 rounded-lg text-sm p-1'/>
        </div>
        <div className='flex justify-center items-center gap-2 my-4'>
            <button onClick={(prev) => setViewMode(!prev)} className='bg-gradient-to-r from-green-600 to-green-800 px-3 py-2 rounded-3xl text-white text-sm font-semibold'>Save Changes</button>
            <button onClick={(prev) => setViewMode(!prev)} className='bg-transparent px-3 py-2 rounded-3xl border border-gray-300 text-gray-800 text-sm font-semibold'>Cancel</button>
            </div>
        </form>    
        </section>
  )
}

export default EditMode