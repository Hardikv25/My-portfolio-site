"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { PiCodesandboxLogo } from "react-icons/pi";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { RxInstagramLogo } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import PortFolioLogo from "../../../public/image/portfoliologo.png"

function Header() {

    const urls = [
        {
            urlname: "Home",
            urlpath: "/",
        },
        {
            urlname: "Projects",
            urlpath: "/projects",
        },
        {
            urlname: "About",
            urlpath: "/about",
        },
        {
            urlname: "Blog",
            urlpath: "/blogs",
        },
        
        

    ]

    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || (path!== "/" && pathname.startsWith(path + "/"));

    return (
        <>
            <div className="sm:flex sm:py-6 sm:px-10 sm:justify-between items-center">
                <Link href="/" className="flex justify-center cursor-pointer">
                    <Image src={PortFolioLogo} className="w-[185px]" alt="Logo" width={500}/>
                </Link>

                <div className="flex my-3 sm:m-0 space-x-4 justify-around items-center bg-gray-200 py-4 px-4 sm:px-10 w-auto sm:w-auto rounded-full shadow-black shadow-sm">
                    {urls.map((url, index) => (
                        <div key={index}>
                            <Link href={url.urlpath} className={`${isActive(url.urlpath) ? "bg-blue-500 text-white rounded-full py-2 px-5" : "hover:text-blue-500"
                                }`}
                            >
                                {url.urlname}
                            </Link>
                        </div>

                    ))}
                </div>

                <div className=" hidden md:flex space-x-3 justify-center items-center">
                    <Link href="#">
                        <CiTwitter className="text-[30px] " />
                    </Link>
                    <Link href="https://github.com/Hardikv25">
                        <FaGithub className="text-[30px] " />
                    </Link>
                    <Link href="https://www.linkedin.com/in/hardik-viras-931ab32b7/">
                        <CiLinkedin className="text-[30px] " />
                    </Link>
                    <Link href="https://www.instagram.com/hardik_2_5/">
                        <RxInstagramLogo className="text-[30px] " />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;
