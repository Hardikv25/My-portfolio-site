"use client"
import React from 'react'
import { CiLocationArrow1 } from "react-icons/ci";



export default function sendmessage() {
    const openMailbox=()=>{
        const emailAddress="virashardik2003@gmail.com"
        window.location.href = `mailto:${emailAddress}?subject=Hello&body=This is a test email.`;
    }
    return (
        <div className='flex py-10 sm:py-14 border-t-2 flex-col md:flex-row justify-between items-center'>
            <h1 className='text-4xl text-gray-700 md:text-5xl text-center md:text-left font-bold'>
                Interested in<br /> working together?
            </h1>

            <button id="mymail" onClick={openMailbox} className='flex shadow-2xl text-2xl md:text-3xl text-white bg-gradient-to-r from-cyan-400 to-blue-900 px-6 md:px-10  hover:bg-gradient-to-r hover:from-cyan-300 hover:to-blue-800 py-4 rounded-full mt-5 md:mt-0'>
                <p className='mr-3'>Send Me a Message</p>
                <CiLocationArrow1 className='pt-1' size={40} />
            </button>
        </div>
    )
}
