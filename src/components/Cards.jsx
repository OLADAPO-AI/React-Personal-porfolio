import React from 'react'

const Cards = (props) => {
  return (

    <div className='shadow-md  shadow-gray-600 flex flex-col rounded-lg w-64 mt-10 h-auto '>     
            <div className=' relative'>
            <div className=' absolute w-auto h-auto bg bg-gradient-to-r from-cyan-500 to-blue-500  border-none text-center text-gray-900 pt-2 font-bold'>{props.header}</div>
              <img src={props.project}  alt="" />  
            </div>
            <div className='flex items-center justify-center'>
                <button className='text-white  rounded-md  cursor-pointer  px-6 py-3 m-4 duration-200 hover:scale-105'><a target='_blank' href={props.demo}>Demo</a></button>

                <button className='text-white  px-6 py-3  rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  m-4 duration-200 hover:scale-105'><a target='_blank' href={props.code}>Code</a></button>
                
            </div>
    </div>
  )
}

export default Cards