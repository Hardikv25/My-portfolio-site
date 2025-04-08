import React from 'react'
import { IoIosAt } from "react-icons/io";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { RxInstagramLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='border-t-2 py-6 sm:pt-10 px-5 sm:flex sm:justify-between'>
      <div className="flex mb-5 sm:mb-0 justify-center items-center">
        <IoIosAt className="mt-0.5" size={22} />
        <p>2025 Hardik</p>
      </div>
      
      <div className="flex space-x-3 justify-center items-center">
        <a href="#"><CiTwitter className="text-[30px] " /></a>
        <a href="https://github.com/Hardikv25"><FaGithub className="text-[30px] " /></a>
        <a href="https://www.linkedin.com/in/hardik-viras-931ab32b7/"><CiLinkedin className="text-[30px] " /></a>
        <a href="https://www.instagram.com/hardik_2_5/"><RxInstagramLogo className="text-[30px] " /></a>
      </div>

    </div>
  )
}
