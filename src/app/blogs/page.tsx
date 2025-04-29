import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogdetails } from './blogdata'

const Page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          My Tech Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore articles that showcase my hands-on experience with modern web development.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogdetails.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`} className="group">
            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={blog.blogimg}
                  alt={blog.blogtitle}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {blog.blogtitle}
                </h2>
                <p className="text-sm text-gray-600 mb-5 line-clamp-3">
                  {blog.innerpara}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.innerlang.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
