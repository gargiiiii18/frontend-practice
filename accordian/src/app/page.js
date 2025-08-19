"use client";
import React from 'react'
import { accordianItems } from "@/data/data";
import Accordian from './components/Accordian';
const page = () => {

  return (
    <main className='w-full bg-center md:bg-cover bg-[url(/himalaya.jpg)] h-screen flex flex-col justify-center items-center'>
      <section className='m-13 p-3 bg-transparent border border-blue-200 w-120 md:w-240 mx-auto inset-0 rounded-xl shadow-2xl'>
      <h1 className='text-center text-2xl md:text-3xl mb-3 '>Mysteries of the Himalayas</h1>
      <div className='m-2 p-2 flex flex-col gap-4'>
        {
          accordianItems.map((accordianItem, index) => (
            <Accordian key={accordianItem.id} id={accordianItem.id} title={accordianItem.title} info={accordianItem.description}/>
          ))
        }
      </div>
      </section>
      </main>
  )
}

export default page