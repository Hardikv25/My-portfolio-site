'use client'

import React from 'react';
import { blogdetails } from '../blogdata';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function Page() {
    const params = useParams();
    const blogId = params.blogId;
    const selectedBlog = blogdetails.find((blog) => blog.id.toString() === blogId);

    return (
        <div className=" min-h-screen py-12 px-6 sm:px-10 lg:px-20">
            {selectedBlog ? (
                <div className="bg-gradient-to-br from-gray-50 via-blue-100 to-[#bae6fd] rounded-2xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl">
                    <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-end space-y-6 lg:space-y-0">
                        <div className="lg:max-w-2xl">
                            <h1 className='text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight'>{selectedBlog.blogtitle}</h1>
                            <div className='flex flex-wrap gap-2'>
                                {selectedBlog.innerlang.map((lang, index) => (
                                    <p key={index} className='bg-gradient-to-r from-sky-500 to-indigo-500 text-center rounded-full text-white py-1.5 px-6 mb-2 text-sm'>
                                        {lang}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="lg:max-w-xl">
                            <p className='text-center lg:text-left text-lg text-gray-600'>{selectedBlog.innerpara}</p>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-300" />
                    <div className="w-full flex flex-col items-center text-lg space-y-8">
                        <Image
                            src={selectedBlog.blogimg}
                            alt="Blog Image"
                            width={900}
                            height={600}
                            className="rounded-3xl w-full max-w-3xl object-cover shadow-xl hover:opacity-90 transition duration-300 ease-in-out"
                        />
                        <div className="max-w-full sm:max-w-4xl mx-auto space-y-6 text-gray-800 leading-relaxed">
                            {selectedBlog.para.split('\n').map((paragraph, index) => (
                                <p key={index} className="text-lg">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <h1 className='font-bold flex h-[400px] text-5xl items-center justify-center text-gray-600'>Blog Not Found</h1>
            )}
        </div>
    );
}
