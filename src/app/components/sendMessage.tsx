"use client"
import Link from 'next/link';
import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";



export default function sendmessage() {
    
    return (
        <div className='flex py-10 sm:py-14 border-t-2 flex-col md:flex-row justify-between items-center'>
            <h1 className='text-3xl text-gray-700 md:text-5xl text-center md:text-left font-bold'>
                Interested in<br /> working together?
            </h1>
            <Link href={`mailto:virashardik2003@gmail.com`}>
                <button id="mymail" className='flex shadow-2xl text-[20px] md:text-3xl text-white bg-gradient-to-r from-cyan-400 to-blue-900 px-6 md:px-10  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-blue-800 py-3 md:py-4 rounded-full mt-5 md:mt-0'>
                    <p className='mr-3'>Send Me a Message</p>
                    <CiLocationArrow1 className='pt-1 w-8 h-8 sm:w-10 sm:h-10' />
                </button>
            </Link>

        </div>
    )
}
