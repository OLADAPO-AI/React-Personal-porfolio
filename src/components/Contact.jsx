import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className='w-full h-auto mx-auto bg-gradient-to-b from-black to-gray-800 p-4 text-white '>
        <div className='flex flex-col  p-4 justify-center max-w-screen mx-auto h-full'>
            <div className='pb-8 '>
                <p className='text-4xl md:ml-32 font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6 md:ml-32'>Submit the form below to get in toiuch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/051da957-c0c9-4a7a-8609-173d757da273" method='POST' className='flex flex-col w-screen md:w-7/12'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2  bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <input type="text" name='email' placeholder='Enter your email' className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>

                    <textarea name="message" placeholder="Enter your message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>let's connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact