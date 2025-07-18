import { useState } from "react"
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

import  {Link} from 'react-scroll'
function NavBar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/",
    },
    {
      id: 3,
      name: "Portfolio",
      path: "/",
    },
    {
      id: 4,
      name: "Experience",
      path: "/",
    },
    {
      id: 5,
      name: "Contact",
      path: "/",
    }
  ];
  return (
    <>
      <div className="bg-white max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src="./vite.svg" alt="logo" className="w-12 h-12 rounded-full" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Sythe<span className="text-green-500 text-2xl">!</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* Desktop NavBar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {
                navItems.map(({id, name})=>{
                  return <li 
                           className="hover:scale-105 duration-200 cursor-pointer" 
                           key={id}>
                            <Link 
                              to={name}
                              smooth={true}
                              duration={500}
                              offset={-70}
                              activeClass="active">
                              {name}
                            </Link>
                          </li>
                })
              }
            </ul>
            <div onClick={()=>setMenu(!menu)} className="md:hidden text-2xl cursor-pointer">
              {
                menu ? <MdClose size={24}/> 
                     : <HiMiniBars3  size={24}/>
              }
            </div>
          </div>
        </div>
        {/* Mobile NavBar */}
        {
          menu && 
          <div>
            <ul className="md:hidden bg-white flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {
                navItems.map(({id, name})=>{
                  return <li 
                           className="hover:scale-105 duration-200 font-semibold cursor-pointer" 
                           key={id}>
                            <Link 
                              onClick={()=>setMenu(!menu)}
                              to={name}
                              smooth={true}
                              duration={500}
                              offset={-70}
                              activeClass="active">
                              {name}
                            </Link>
                         </li>
                })
              }
            </ul>
          </div>
        }
        
      </div>
    </>
  );
}

export default NavBar;