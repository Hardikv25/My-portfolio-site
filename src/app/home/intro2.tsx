import React from 'react'
import { FaCode } from "react-icons/fa6";
import { PiPuzzlePieceBold, PiBinocularsDuotone } from "react-icons/pi";




export default function Intro2() {


    const introdetails = [
        {
            id: 1,
            title: "Full Stack",
            para: 'Skilled in both frontend and backend, with a primary focus on building secure, efficient, and scalable backend systems.',
            icon: FaCode,
        }, {
            id: 2,
            title: "Problem Solver",
            para: 'Detail-oriented and analytical, I tackle challenges with a clear approach, creating efficient and reliable solutions.',
            icon: PiPuzzlePieceBold,
        }, {
            id: 3,
            title: "Tech Explorer",
            para: 'Always on the lookout for new tools and technologies to implement effective and modern solutions.',
            icon: PiBinocularsDuotone,
        }

    ]


    return (
        <div className='grid sm:grid-cols-3 my-10 sm:my-20 px-5  justify-around border py-5 sm:py-12 rounded-3xl shadow-lg'>
            {introdetails.map((item) => (
                <div key={item.id}>
                    <div className='w-auto sm:mx-2 sm:w-[300px] col-span-1'>
                        <div className='flex sm:flex-none sm:block mb-3 sm:mb-0'>
                            <item.icon size={40} className='fill-sky-400' />
                            <h1 className='ml-2 sm:m-0  font-bold sm:py-3 text-gray-700 text-4xl text-left'>{item.title}</h1>
                        </div>

                        <p className='text-left text-sky-700 mb-3'>{item.para}</p>
                    </div>

                    <hr className='my-3 sm:hidden' />
                </div>
            ))}
        </div>
    )
}
