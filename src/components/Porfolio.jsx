import React from 'react'
import Cards from './Cards'
import data from './Data'

const Porfolio = () => {
    const cardDetails = data.map(card => {
        return (
            <Cards 
              key =  {card.id}
              project = {card.img}
              demo = {card.demo}
              code = {card.code}
              header = {card.h3}
            />
        )
    })
  
  
  
    return (
    <div id="Portfolio" className='bg-gradient-to-b from-black to-gray-800 flex flex-col  w-auto text-white md:h-auto '>
       <div className='max-w-screen-lg p-4 mx-auto px-14 flex flex-col justify-center w-full '>
         <div className='pb-5 '>
           <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Porfolio</p>
           <p className='texl-xl mt-10 text-gray-500'>Check out some of my work right here</p>
         </div>
       </div>
      <div className=' flex container w-screen md:w-9/12 mx-auto overflow-x-auto scrollbar-hide mb-6'>
        <div className="flex gap-4 mb-6 mx-auto ">
            {cardDetails}
        </div>
        </div>
    </div>
    
  )
}

export default Porfolio


