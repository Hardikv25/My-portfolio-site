import React from 'react'
import Image from 'next/image'
import blog1 from '../../../public/image/blog4.jpeg'
import blog2 from '../../../public/image/blog2.jpeg'
import blog3 from '../../../public/image/blog3.jpeg'
import blog4 from '../../../public/image/blog1.jpeg'
import Link from 'next/link'

export const blogdetails = [
  {
    id: 1,
    blogimg: blog1,
    blogtitle: "Twilio",
    innerpara: "We developed a virtual showcase for the softest bedding imaginable.",
    innerlang: ["React", "Frontend", "Travel"],
    para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere commodo venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non ligula vel metus efficitur hendrerit. In hac habitasse platea dictumst. Praesent et mauris ut mi dapibus semper. Curabitur tortor justo, efficitur sit amet pretium cursus, porta eget odio. Cras ac venenatis dolor. Donec laoreet posuere malesuada. Curabitur nec mi tempor, placerat leo sit amet, tincidunt est. Quisque pellentesque venenatis magna, eget tristique nibh pulvinar in. Vestibulum vitae volutpat arcu. Aenean ut malesuada odio, sit amet pellentesque odio. Suspendisse nunc elit, blandit nec hendrerit non, aliquet at magna. Donec id leo ut nulla sagittis sodales. 

Integer vitae nibh elit. Suspendisse eget urna eu neque bibendum pharetra. Sed interdum lectus sem, in pulvinar magna dignissim vel. Quisque maximus at urna nec laoreet. Suspendisse potenti. Vestibulum rhoncus sem ut mi pellentesque, in vestibulum erat blandit. Aliquam sodales dui ac maximus consectetur. Duis quis est vehicula, imperdiet nisl nec, fermentum erat. Duis tortor diam, pharetra eu euismod in, vehicula non eros. Curabitur facilisis dui at erat ultrices gravida. In at nunc ultricies, pulvinar mi vel, sagittis mauris. Praesent pharetra posuere purus ac imperdiet. Nulla facilisi.\n

Sed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.`
  },
  {
    id: 2,
    blogimg: blog2,
    blogtitle: "SSH",
    innerpara: "We designed a whodunnit-style game to introduce Markdown formatting. Suspense — suspicion — syntax!",
    innerlang: ["Frontend", "CSS", "Cricket"],
    para: `Level-two heading
Tell me and I forget. Teach me and I remember. Involve me and I learn.

Lorem ipsum dolor sit amet, Astro makes people happy. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a condimentum vitae. Dapibus ultrices in iaculis nunc. Arcu odio ut sem nulla pharetra diam sit amet. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare.

Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Eget gravida cum sociis natoque penatibus. Cras fermentum odio eu feugiat pretium nibh. Proin nibh nisl condimentum id venenatis. Porta nibh venenatis cras sed felis eget velit. Id diam vel quam elementum pulvinar etiam non.

Level-three heading
Ultrices tincidunt arcu non sodales neque sodales ut. Sed enim ut sem viverra aliquet eget sit amet. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Viverra accumsan in nisl nisi scelerisque eu ultrices. In massa tempor nec feugiat nisl pretium fusce.

Level-three heading
Sed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.

Aenean pretium purus augue, ut bibendum erat convallis quis. Cras condimentum quis velit ac mollis. Suspendisse non purus fringilla, venenatis nisl porta, finibus odio. Curabitur aliquet metus faucibus libero interdum euismod. Morbi sed magna nisl. Morbi odio nibh, facilisis vel sapien eu, tempus tincidunt erat. Nullam erat velit, sagittis at purus quis, tristique scelerisque tortor. Pellentesque lacinia tortor id est aliquam viverra. Vestibulum et diam ac ipsum mollis fringilla.

Level-four heading
We noted this
And also this other point`
  },
  {
    id: 3,
    blogimg: blog3,
    blogtitle: "Node.JS",
    innerpara: "We paired with a cutting-edge music API and a team of horticulturalists to build AI-generated playlists that maximize houseplant health.",
    innerlang: ["Dev", "Branding", "Backend"],
    para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere commodo venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non ligula vel metus efficitur hendrerit. In hac habitasse platea dictumst. Praesent et mauris ut mi dapibus semper. Curabitur tortor justo, efficitur sit amet pretium cursus, porta eget odio. Cras ac venenatis dolor. Donec laoreet posuere malesuada. Curabitur nec mi tempor, placerat leo sit amet, tincidunt est. Quisque pellentesque venenatis magna, eget tristique nibh pulvinar in. Vestibulum vitae volutpat arcu. Aenean ut malesuada odio, sit amet pellentesque odio. Suspendisse nunc elit, blandit nec hendrerit non, aliquet at magna. Donec id leo ut nulla sagittis sodales.

Integer vitae nibh elit. Suspendisse eget urna eu neque bibendum pharetra. Sed interdum lectus sem, in pulvinar magna dignissim vel. Quisque maximus at urna nec laoreet. Suspendisse potenti. Vestibulum rhoncus sem ut mi pellentesque, in vestibulum erat blandit. Aliquam sodales dui ac maximus consectetur. Duis quis est vehicula, imperdiet nisl nec, fermentum erat. Duis tortor diam, pharetra eu euismod in, vehicula non eros. Curabitur facilisis dui at erat ultrices gravida. In at nunc ultricies, pulvinar mi vel, sagittis mauris. Praesent pharetra posuere purus ac imperdiet. Nulla facilisi.

Sed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.`
  },
  {
    id: 4,
    blogimg: blog4,
    blogtitle: "Golang",
    innerpara: "We developed brand positioning and design assets for the launch of a new colored water product.",
    innerlang: ["Design", "Branding"],
    para:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur posuere commodo venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non ligula vel metus efficitur hendrerit. In hac habitasse platea dictumst. Praesent et mauris ut mi dapibus semper. Curabitur tortor justo, efficitur sit amet pretium cursus, porta eget odio. Cras ac venenatis dolor. Donec laoreet posuere malesuada. Curabitur nec mi tempor, placerat leo sit amet, tincidunt est. Quisque pellentesque venenatis magna, eget tristique nibh pulvinar in. Vestibulum vitae volutpat arcu. Aenean ut malesuada odio, sit amet pellentesque odio. Suspendisse nunc elit, blandit nec hendrerit non, aliquet at magna. Donec id leo ut nulla sagittis sodales.

Integer vitae nibh elit. Suspendisse eget urna eu neque bibendum pharetra. Sed interdum lectus sem, in pulvinar magna dignissim vel. Quisque maximus at urna nec laoreet. Suspendisse potenti. Vestibulum rhoncus sem ut mi pellentesque, in vestibulum erat blandit. Aliquam sodales dui ac maximus consectetur. Duis quis est vehicula, imperdiet nisl nec, fermentum erat. Duis tortor diam, pharetra eu euismod in, vehicula non eros. Curabitur facilisis dui at erat ultrices gravida. In at nunc ultricies, pulvinar mi vel, sagittis mauris. Praesent pharetra posuere purus ac imperdiet. Nulla facilisi.

Sed pulvinar porttitor mi in ultricies. Etiam non dolor gravida eros pulvinar pellentesque et dictum ex. Proin eu ornare ligula, sed condimentum dui. Vivamus tincidunt tellus mi, sed semper ipsum pharetra a. Suspendisse sollicitudin at sapien nec volutpat. Etiam justo urna, laoreet ac lacus sed, ultricies facilisis dolor. Integer posuere, metus vel viverra gravida, risus elit ornare magna, id feugiat erat risus ullamcorper libero. Proin vitae diam auctor, laoreet lorem vitae, varius tellus.`
  }

];

const page = () => {


  return (
    <div className='py-16'>
      <div className='text-center sm:text-left text-gray-800'>
        <h1 className='md:text-left font-bold text-6xl leading-[75px] sm:leading-0'>My Tech Blog</h1>
        <p className='md:text-left text-2xl max-w-[475px] py-6'>See my most recent projects below to get an idea of my past experience.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 pt-5 my-10'>
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

export default page