import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogdetails } from './blogdata';

const page = () => {

  return (
    <div className='py-12 sm:py-16'>
      <div className='text-center sm:text-left text-gray-800'>
        <h1 className='md:text-left font-bold text-[40px] sm:text-6xl leading-[75px] sm:leading-0'>My Tech Blog</h1>
        <p className='md:text-left text-xl sm:text-2xl max-w-[475px] py-4 sm:py-6'>See my most recent projects below to get an idea of my past experience.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-5 my-8 sm:my-10'>
        {blogdetails.map((blog) => (
          <div key={blog.id}>
            <Link href={`./blogs/${blog.id}`}>
              <div className="relative shadow-2xl w-[100%] rounded-3xl col-span-1 overflow-hidden border border-gray-300">
                <Image src={blog.blogimg} alt="img1" width={1000} className="w-[100%] h-[300px] md:h-[400px] object-cover" />
                <div className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-1 rounded-md shadow-md">
                  <span className="text-lg font-semibold">{blog.blogtitle}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  )
}

export default page;