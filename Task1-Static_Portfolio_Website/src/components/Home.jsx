import React from 'react';
import { FaDiscord} from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped,Typed } from "react-typed";


function Home() {
  return (
    <>
      <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span className='text-xl'>Welcome In My Feed</span>
            <div className='flex space-x-2 text-2xl md:text-4xl'>
              <h1>Hi, I'm a</h1>
              {/* <span className='text-red-700 font-bold'>Developer</span> */}
              <ReactTyped
                className='text-[#00aced] font-bold'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br/>
            <p className='text-sm md:text-medium text-justify'>
              Passionate about building interactive and responsive web applications.
              I enjoy turning ideas into beautifully crafted user experiences. With a strong foundation in HTML, CSS, JavaScript, and modern tools like React and Tailwind CSS, I'm on a journey to create impactful digital products
            </p>
            <br/>
            {/* Social Media Icons */}
            <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold text-center md:text-start'>Available on</h1>
                <ul className='flex space-x-5'>
                  <li>
                    <a href='https://discord.com/users/codingmation' target='_blank'>
                    <FaDiscord className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/' target='_blank'>
                    <FaLinkedin className='text-2xl cursor-pointer' />
                    </a>    
                  </li>
                  <li>
                    <a href='https://leetcode.com/u/CodingMation/' target='_blank'>
                      <SiLeetcode className='text-2xl cursor-pointer' />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.github.com/CodingMation' target='_blank'>
                    <FaSquareGithub className='text-2xl cursor-pointer' />
                    </a>  
                  </li>  
                </ul>
              </div>
              <div className='space-y-2'>
                <h1 className='font-bold text-center md:text-start'>Currently working on</h1>
                <div className='flex space-x-5'>
                    <SiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <SiExpress className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <FaReact className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <FaNodeJs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-1/2 flex items-center justify-center md:mt-20 md:ml-48 order-1'>
            <img src='./imgProf.png' alt='profile' 
              className='rounded-full w-[350px] h-[350px] md:w-[400px] md:h-[400px]' />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;