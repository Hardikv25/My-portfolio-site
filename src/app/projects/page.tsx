import React from 'react'
import travelimg from '../../../public/image/travelimg.png'
import eyewearimg from '../../../public/image/eyewear.webp';
// import grocery from '../../../public/image/grocery.webp'
import supporthub from '../../../public/image/supporthub.png'

import Image from 'next/image';

const page = () => {

  const projects = [
    {
      id: 1,
      title: "EyeBeam",
      proimg: eyewearimg,
      live:"https://github.com/Hardikv25/eyebeam",
      git:"https://github.com/Hardikv25/eyebeam",
      colspan : "col-span-1 md:col-span-1 xl:col-span-1",
    },
    {
      id: 2,
      title: "Tour & Travel",
      proimg: travelimg,
      live:"https://github.com/Hardikv25/hmtourtravel",
      git:"https://github.com/Hardikv25/hmtourtravel",
      colspan : "col-span-1 md:col-span-1 xl:col-span-1",
    },
    // {
    //   id: 3,
    //   title: "Grocery",
    //   proimg: grocery,
    //   link:"https://github.com/Hardikv25/grocery_management_System",
    //   colspan : "col-span-1 md:col-span-2 xl:col-span-1",
    // },
    {
      id: 3,
      title: "SupportHub",
      proimg: supporthub,
      live:"https://support-hub-pearl.vercel.app/",
      git:"https://github.com/Vyom2663/support-hub",
      colspan : "col-span-1 md:col-span-2 xl:col-span-1",
    }
  ]

  return (
    <>
    <div className='text-center pt-10'>
      <p className='text-xl text-gray-800'>Browse My Recent</p>
      <h1 className='text-5xl sm:text-6xl font-bold text-gray-800'>Projects</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-16 lg:mx-10 gap-5'>
      {projects.map((pro)=>(
      <div key={pro.id} className={`border border-sky-700  py-5 ${pro.colspan} justify-items-center px-4 sm:px-10 rounded-3xl shadow-2xl w-auto bg-gray-50 `}>
        <Image src={pro.proimg} alt="SpecsImg" className='w-[100%] h-[300px] shadow-2xl border-2 object-cover rounded-3xl object-top'/>
        <h1 className='text-3xl font-bold text-gray-800 my-5'>{pro.title}</h1>
        <div className='md:flex justify-center gap-2'>
            <a href={pro.git}><p className='border my-5 md:my-0 border-gray-600 hover:bg-gray-600 hover:text-white rounded-full py-2 px-8'>Github</p></a>
            <a href={pro.live}><p className='border border-gray-600 hover:bg-gray-600 hover:text-white rounded-full py-2 px-5'>Live Demo</p></a>
        </div>
      </div>
      ))}
    </div>
    </>
  )
}

export default page