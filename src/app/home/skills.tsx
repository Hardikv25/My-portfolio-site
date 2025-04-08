import React from 'react'

export default function Skills() {

    const skills = [
        { id: 1, name: "JavaScript", colSpan: "col-span-1 sm:col-span-2" },
        { id: 2, name: "MongoDB", colSpan: "col-span-1 sm:col-span-2" },
        { id: 3, name: "React.js", colSpan: "col-span-1 sm:col-span-2" },
        { id: 4, name: "Next.js", colSpan: "col-span-1 sm:col-span-3" },
        { id: 5, name: "TailwindCSS", colSpan: "col-span-2 sm:col-span-3" },
    ]
    return (
        <div className='my-18 sm:my-14 text-center'>
            <h1 className='font-bold text-[35px] sm:text-5xl text-gray-800'>Skills & Expertise</h1>
            <p className='w-auto sm:w-[75%] md:w-[50%] my-3 sm:my-10 text-md sm:text-xl mx-auto'>
                <span>I specialize in frontend and backend technologies. Below, you can explore my key skills and the tools I use to build efficient and scalable solutions.</span>
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-6 py-5 justify-items-center mx-2 sm:mx-16 md:mx-24 gap-5">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        className={`shadow-lg bg-gray-100 border-gray-400 ${skill.colSpan} border my-1 rounded-3xl w-full py-16`}
                    >
                        {skill.name}
                    </div>
                ))}
            </div>
        </div>


    )
}
