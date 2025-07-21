import React from 'react';

const Exeperience = () => {
  const link = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
  const cardItem=[
    {
      id:1,
      logo: link+"html5/html5-original.svg",
      name: "HTML5"
    },
    {
      id:2,
      logo: link+"css3/css3-original.svg",
      name: "CSS3"
    },
    {
      id:3,
      logo: link+"javascript/javascript-original.svg",
      name: "JavaScript"
    },
    {
      id:4,
      logo: link+"react/react-original.svg",
      name: "React"
    }
  ]
  return (
    <>
      <div name="Experience" className='bg-white max-w-screen-2xl container mx-auto px-4 md:px-16 my-16'>
        <div>
          <h1 className='text-3xl font-bold mb-5'>My Experience</h1>
          <p className='font-semibold'>
            I've more than 2 years of experience in Web Development.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-10 my-3'>
            {
              cardItem.map(({id,logo,name})=>{
                return (
                  <div key={id} className='flex flex-col items-center justify-center border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300'>
                  <img src={logo} alt={name} className='w-[100px] md:w-[150px] p-1 rounded-full' />
                  <div>
                    <div className='px-2 font-bold text-xl mb-2'>{name}</div>
                  </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Exeperience;