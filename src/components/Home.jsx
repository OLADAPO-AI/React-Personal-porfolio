  import React from 'react'
  import {RiArrowRightDoubleFill} from "react-icons/ri"
  import { Link } from 'react-scroll'
  
  const Home = () => {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
         timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }


    return (
      <div id="Home" className=' md:h-screen h-auto bg-gradient-to-b from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto  flex flex-col items-center justify-center md:h-full h-auto px-4 md:flex-row'>
            <div className='w-full md:w-7/12 h-full mt-32 md:mt-32 flex flex-col justify-center px-4 '>
                <h2 className='text-2xl sm:text-5xl pl-7 font-bold text-white'>
                    I'm a Full Stack Developer
                </h2>
                <p className='text-gray-500 pl-7 py-4 md:max-w-md'>
                Passionate full stack developer leveraging 3+ years experience in JavaScript, React, Node.js, and other front-end, back-end, and DevOps technologies to build robust web applications. 
                </p>
                <div className='ml-7'>
                    <Link to='Portfolio' smooth offset={-100} duration={500} className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Porfolio 
                        <span className='group-hover:rotate-90  duration-300'><RiArrowRightDoubleFill size={25}/></span>
                    </Link>
                </div>
            </div>

            <div className='w-full md:w-5/12  md:mt-32'>
                <div className='h-auto w-4/6 border-4 border-gray-300 bg-slate-800 mx-auto py-3 px-8 rounded-xl'>
                    <div className='flex flex-col gap-3 items-center border border-none bg-gray-900 rounded-lg shadow-2xl pb-2'>
                    <img className="w-48 " src="/dapo.png" alt="" />
                    <div className="w-48 flex flex-col items-center text-slate-200 ">
                      <h2 className="text-xl font-medium">Good {timeOfDay}!</h2>
                      <h1 className="text-md font-normal text-gray-500">Oladapo Falusi</h1>
                      <h2 className="text-sm font-normal ">Software Developer</h2>
                      <p className="text-xs font-light">Bournemonth</p>
                    </div>

                <div className="flex w-48 flex-col  gap-2 ">
            

                <div className="flex w-48 h-auto gap-3 justify-center my-4">
             <a href='https://www.behance.net/falusioladapo' target='_blank' className="items-center justify-center flex w-8 h-6 rounded-lg bg-white"><i className="fa fa-behance"></i></a>

             <a href='https://twitter.com/dapreal' target='_blank' className="items-center justify-center flex w-8 h-6 rounded-lg bg-white"><i className="fa fa-twitter"></i></a>

             <a href='https://www.facebook.com/falusi.dapo' target='_blank' className="items-center justify-center flex w-8 h-6 rounded-lg bg-white"><i className="fa fa-facebook"></i></a>

             <a href='https://www.instagram.com/davis__codes/' target='_blank' className="items-center justify-center flex w-8 h-6 rounded-lg bg-white"><i className="fa fa-instagram"></i></a>

        </div>



              <div className="flex flex-col justify-start text-white">
                <h3 className="text-sm font-bold">Interests</h3>
                <p className="text-xs font-light text-gray-500">I'm a fun-loving software developer who creates exciting software and prioritizes collaboration. I love learning and growing while staying up-to-date with the latest tech.</p>
              </div>
            
          </div>
    
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Home