import React from "react";
import Image from "next/image";
import myimg from '../../../public/image/myimg2.jpeg'
import { FaCode } from "react-icons/fa6";

function Intro() {

    const introdetails = [{
        title: "Hi, my name is Hardik",
        description: "I am a Full-Stack Developer with a focus on frontend development and a passion for creating seamless user experiences.",
    }]

    const devtype = [
        { title: "Developer" },
    ]


    return (
        <>
            <div className="sm:mx-10 sm:my-10 sm:mt-18 sm:flex justify-between">
                {introdetails.map((intro, index) => (
                    <div key={index} className="items-center content-start sm:content-center">

                        <h1 className="text-[40px] sm:text-6xl md:text-7xl leading-[55px] sm:leading-[65px] md:leading-[85px] font-bold text-center sm:text-left ">{intro.title}</h1>

                        <p className="my-3 w-auto text-center sm:text-left text-xl  sm:text-2.5xl md:text-3xl">{intro.description}</p>

                        
                            <div className="flex gap-2 flex-wrap">
                            {devtype.map((type,index) => (
                                <div key={index} className="hidden sm:flex bg-blue-500 rounded-full py-1.5 px-5 w-auto">
                                    <FaCode className=" mr-1 text-white my-auto" size={20} />
                                    <p className="text-xl  text-white ">{type.title}</p>
                                </div>
                                ))}
                            </div>
                        
                    </div>
                ))}

                <div className="items-center">
                    <Image src={myimg} className="content-center rounded-[50px] max-w-[430px] object-cover object-top w-full sm:w-[1000px] h-[300px] sm:h-auto" alt="myimg" height={550} width={400} />
                </div>


                {/* <div className="flex justify-center sm:hidden my-5 gap-2 flex-wrap">
                    <div className="flex bg-blue-500 rounded-full py-1 px-5 w-[150px]">
                        <FaCode className=" mr-1 text-white " size={25}/>
                        <p className="text-xl text-white ">Developer</p>
                    </div>
                    <div className="flex  bg-blue-500 rounded-full py-1 px-5 w-[150px]">
                        <FaCode className=" mr-1 text-white " size={25}/>
                        <p className="text-xl text-white ">Developer</p>
                    </div>
                    <div className="flex bg-blue-500 rounded-full py-1 px-5 w-[150px]">
                        <FaCode className=" mr-1 text-white " size={25}/>
                        <p className="text-xl text-white ">Developer</p>
                    </div>
                    <div className="flex  bg-blue-500 rounded-full py-1 px-5 w-[150px]">
                        <FaCode className=" mr-1 text-white " size={25}/>
                        <p className="text-xl text-white ">Developer</p>
                    </div>
                    </div> */}


            </div>
        </>
    )
}

export default Intro;