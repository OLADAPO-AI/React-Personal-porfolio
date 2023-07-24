import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = React.useState(false)
   
  
  const link = [
    {
        id: 1,
        link: "Home"
    },
    
    {
        id: 2,
        link: "About"
    },

    {
        id: 3,
        link: "Portfolio"
    },

    {
        id: 4,
        link: "Contact"
    }
  ]
  return (
    <div className='flex px-4 z-20 justify-between items-center w-full h-20 text-white bg-black fixed'>
         <div>
            <h1 className='text-5xl font-vibes ml-2 mt-1'>O.D</h1>
         </div>

         <ul className='md:flex hidden'>
            {link.map(({id,link}) => (
               <li key={id} className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
                  <Link to={link} spy={true} smooth={true} offset={-100} duration={500}>{link}</Link>
               </li>
               
              
            ))}
         </ul>

        <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
            {nav? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
         
         {nav && (
             <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
                
             {link.map(({id,link}) => (
             <li key={id} className='px-4 cursor-pointer py-6 text-4xl'><Link onClick={() => setNav(!nav)} to={link} spy={true} smooth={true} offset={-100} duration={500}>{link}</Link></li>
         ))}
             
         </ul>
         )}
       
    </div>
  )
}

export default NavBar