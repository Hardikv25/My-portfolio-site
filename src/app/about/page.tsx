import React from 'react'
import Image from 'next/image'
import aboutme from '../../../public/image/aboutme.jpg'

const page = () => {

  const aboutdetails = [
    {
      id: 1,
      title: "Background",
      description: "I come from a strong academic and technical background, which has been instrumental in shaping my skills and passion for technology. Pursuing an MCA has allowed me to dive deep into advanced concepts in computer science, including software engineering, database management, and web development. This journey has also provided me with opportunities to work on diverse projects, enhancing my practical knowledge and collaborative abilities.",
    },
    {
      id: 2,
      title: "Eduction",
      description: "Master of Computer Application(MCA).",
    },
    {
      id: 3,
      title: "Skills",
      description: "I have a strong command over programming languages such as HTML, CSS, JavaScript, PHP, and SQL, and I am proficient in frameworks like Bootstrap and basic React. My expertise extends to database management with MySQL and development tools such as VS Code, Git, and GitHub. Additionally, I bring valuable skills in problem-solving, analytical thinking, and effective team collaboration to every project I undertake.",
    }
  ]

  return (
    <>
      <div className='my-20 justify-items-center'>
        <h1 className='text-7xl font-bold my-5'>About</h1>
        <p className='w-auto sm:w-[75%] md:w-[50%] my-2 sm:my-5 text-center text-2xl mx-auto'>Thanks for stopping by. Read below to learn more about myself and my background.</p>
        <Image src={aboutme} className="rounded-3xl shadow-2xl shadow-slate-500 object-cover object-top my-14 h-[450px]" alt="aboutme" width={800} height={400} />
      </div>
      <div className='my-10'>
        {aboutdetails.map((about) => (
          <div key={about.id} className=' lg:grid lg:grid-cols-6  my-5'>
            <h1 className='font-bold text-2xl col-span-1 text-left '>{about.title}</h1>
            <p className='text-lg text-left col-span-5'>{about.description}</p>
          </div>
        ))}
      </div>
    </>

  )
}

export default page