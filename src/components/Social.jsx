import React from 'react'
import { FaGithub, FaLinkedin , FaBehance } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Social = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between rounded-t-md items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'> 
              <a href="www.linkedin.com/in/oladapofalusi" className='flex justify-between items-center w-full text-white'>
                <>
                 LinkedIn <FaLinkedin />
                </>
              </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'> 
              <a href="https://github.com/OLADAPO-AI" className='flex justify-between items-center w-full text-white'>
                <>
                 Github <FaGithub />
                </>
              </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'> 
              <a href="https://www.behance.net/falusioladapo" className='flex justify-between items-center w-full text-white'>
                <>
                 Behance <FaBehance />
                </>
              </a>
            </li>
            <li className='flex justify-between items-center w-40 rounded-b-md h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'> 
              <a href="/OladapoCV.pdf" className='flex justify-between items-center w-full text-white' download={true} target='_blank'>
                <>
                 Resume <BsFillPersonLinesFill />
                </>
              </a>
            </li>
        </ul>
    </div>
  )
}

export default Social