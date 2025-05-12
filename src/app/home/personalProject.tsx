import React from 'react'
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import travelimg from '../../../public/image/travelimg.png'
import eyewearimg from '../../../public/image/eyewear.webp';
import supporthub from '../../../public/image/supporthub.png'
import MultiStepForm from '../../../public/image/multi-step-form.png';

export default function PersonalProject() {

    const projects = [
        {
            id: 1,
            title: "EyeBeam",
            image: eyewearimg,
            link: "https://github.com/Hardikv25/eyebeam",
        },
        {
            id: 2,
            title: "Tour & Travel",
            image: travelimg,
            link: "https://github.com/Hardikv25/hmtourtravel",
        },
        {
            id: 3,
            title: "Supporthub",
            image: supporthub,
            link: "https://support-hub-pearl.vercel.app/",
        },
        {
            id: 4,
            title: "Multi-step-form",
            image: MultiStepForm,
            link: "https://multi-step-form-web-application.vercel.app/",
        },
    ]

    return (
        

        <div className='py-8 sm:py-10 md:px-5 lg:px-10'>
            <div className="flex flex-col md:flex-row  justify-between items-center gap-6 md:gap-10">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl text-gray-800 md:text-6xl font-bold">
                        Personal Projects
                    </h1>
                    <p className="text-lg text-gray-600 my-5 md:text-2xl max-w-[300px] md:max-w-[600px] mx-auto md:mx-0">
                        Take a look at some highlighted personal projects, showcasing my skills and passion for development.
                    </p>
                </div>

                <a href="/project">
                    <button className="flex items-center shadow-2xl text-lg md:text-2xl text-white bg-gradient-to-r from-cyan-400 to-blue-900 px-6 md:px-10 hover:bg-gradient-to-r hover:from-cyan-300 hover:to-blue-800 py-3 md:py-4 rounded-full">
                        <p>View All</p>
                        <FaArrowRight className="ml-2" />
                    </button>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 pt-5 my-10">
                {projects.map((project) => (
                    <a key={project.id} href={project.link}>
                        <div className="relative shadow-2xl w-[100%] rounded-3xl overflow-hidden border border-gray-300">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-[100%] h-[300px] md:h-[350px] object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-md shadow-md">
                                <span className="text-sm font-semibold">{project.title}</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </div>

    )
}
