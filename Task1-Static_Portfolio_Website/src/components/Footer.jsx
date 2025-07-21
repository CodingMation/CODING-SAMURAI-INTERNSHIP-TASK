import React from 'react';
import {FaDiscord, FaGithub, FaLinkedinIn} from 'react-icons/fa6';
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <>
      <hr />
      <footer className='py-12'>      
        <div className='bg-white max-w-screen-2xl container mx-auto px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
              <a href='https://www.linkedin.com/in/codingmation/' target='_blank'>
                <FaLinkedinIn className='text-2xl cursor-pointer' />
              </a>
              <a href='https://github.com/CodingMation' target='_blank'>
                <FaGithub className='text-2xl cursor-pointer' />
              </a>
              <a href='https://discord.com/users/codingmation' target='_blank'>
                <FaDiscord className='text-2xl cursor-pointer' />
                </a>
              <a href='https://leetcode.com/u/CodingMation/' target='_blank'>
                <SiLeetcode className='text-2xl cursor-pointer' />
              </a>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
              <p className='text-sm'>
                &copy; 2025 CM. All rights reserved.
              </p>
              <p className='text-sm'>
                Supportive Partner Sythe
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
