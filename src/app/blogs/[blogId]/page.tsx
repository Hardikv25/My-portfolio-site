import React from 'react';
import { blogdetails } from '../page';
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';

function Page({ params }: { params: { blogId: string } }) {
    const { blogId } = params;

    // Find the blog with the matching ID
    const selectedBlog = blogdetails.find((blog) => blog.id.toString() === blogId);

    return (
        <div>
            <Link href="/blogs">
                <div className='flex text-2xl text-blue-700 mt-5'>
                    <FaArrowLeftLong className='my-auto mx-2' />
                    <p>Blog</p>
                </div>
            </Link>
            {selectedBlog ? (
                <div>
                    <div className='text-center lg:text-left lg:flex lg:justify-between items-end my-5'>
                        <div>
                            <h1 className='text-6xl font-bold'>{selectedBlog.blogtitle}</h1>
                            <div className='justify-center flex mt-5 flex-wrap gap-2'>
                                {selectedBlog.innerlang.map((lang, index) => (
                                    <p key={index} className='bg-sky-500 w-[125px] my-2 text-center rounded-full text-white py-1.5'>
                                        {lang}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className='text-center lg:text-left text-lg pb-3 w-auto lg:w-[600px]'>{selectedBlog.innerpara}</p>
                        </div>
                    </div>
                    <hr />
                    <div className="w-full flex flex-col items-center text-lg py-10" >
                        <Image
                            src={selectedBlog.blogimg}
                            alt="Blog Image"
                            width={600}
                            height={400}
                            className="rounded-3xl border w-auto shadow-lg"
                        />
                        <div className="max-w-[600px] mt-6 space-y-4 text-gray-800 leading-relaxed">{selectedBlog.para.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                </div>
            ) : (
                <h1 className=' font-bold flex h-[400px] text-5xl items-center justify-center'>Blog Not Found</h1>
            )}
        </div>
    );
}

export default Page;
