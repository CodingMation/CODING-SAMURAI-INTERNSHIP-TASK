import React from 'react';

function About() {
  return (
    <>
      <div name="About" className='bg-white max-w-screen-2xl container mx-auto px-4 md:px-16'>
        <h1 className='text-3xl font-bold mb-5'>About Me</h1>
        <p>
          Hello, I'm Sythe, a passionate Web Developer. I aim to craft impactful, user-friendly, and visually appealing software solutions that make a difference. I'm driven by curiosity and always eager to grow in this fast-paced digital world.
        </p>
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>Education & Training</h1>
        <span>
        Currently pursuing a Bachelor's in Computer Applications (BCA) from Barkatullah University. I have a solid foundation in computer science, programming, and software development.        
        </span>
        <br /><br />
        <h1 className='text-green-500 font-semibold text-xl'>Skills & Expertise</h1>
        <span>
          Frontend: HTML, CSS, JavaScript, React, Tailwind CSS
          <br />
          Backend: Node.js, Express.js, Python, PHP
          <br />
          Database: MongoDB, MySQL
          <br />
          Tools & Others: Git, GitHub, Vite, VS Code
          <br />
          Always exploring new frameworks and technologies to stay updated and innovative.
        </span>
        <br /><br />
        <h1 className='text-green-500 font-semibold text-xl'>Professional Experience</h1>
        <span>
          I have worked on various projects and have gained a lot of experience in the field.
        </span>
        <br /><br />
        <h1 className='text-green-500 font-semibold text-xl'>Achievements & Awards</h1>
        <span>
          I have won various awards and recognitions for my work.
        </span>
        <br /><br />
        <h1 className='text-green-500 font-semibold text-xl'>Mission Statement</h1>
        <span>
          My mission is to create impactful and visually stunning Software solutions that leave a lasting impression. I strive to be a lifelong learner and to always be up-to-date with the latest trends and technologies.
        </span>
        <br /><br /> 
      </div>
    </>
  );
}

export default About;