import React from 'react'

const About = () => {
  return (
    <div id="About" className='w-full h-auto md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full md:h-full h-auto px-14'>
            <div className='pb-5 '>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='texl-xl mt-10 text-gray-500'>
            I'm a passionate full stack developer who brings ideas to life through clean, intuitive code. Self-taught, I have continuously expanded my skills by taking on new projects - eager to learn emerging technologies. My expertise spans modern web development landscapes - from reactive frontends built with HTML, CSS, JavaScript and React to robust backends leveraging Node.js, Express and MongoDB. I follow best practices in version control, testing, deployment and responsive design.
            </p>

            <br />

            <p className='texl-xl text-gray-500 pb-3 md:pb-0'>
            While constantly learning, I also focus on writing scalable, maintainable applications. I thrive when collaborating with creative teams to build and deliver products that provide real value. I have a diverse technical skillset allowing me to tackle projects from concept to completion. If you have an exciting idea in the pipeline, I'd love to discuss how I can help bring it to life! Please reach out - I'm eager to help build the next great web application.
            </p>
        </div>
    </div>
  )
}

export default About