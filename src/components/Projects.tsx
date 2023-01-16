import Image from 'next/image'
import React from 'react'
import PrjectImage from '../assets/Bitmap.png'

const Projects = () => {
  return (
    <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>

      {
        [1,2,3,4,5,6].map((item:number)=> (
          <div className='' key={item}>
          <div className='target-con cursor-pointer'>
            <Image className='w-full' src={PrjectImage} alt="Project Image" priority/>
            <div className='target'>
              <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW PROJECT</a></span>
              <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW CODE</a></span>
            </div>
          </div>
          <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
          <span className='text-custBlack-300 text-sm mt-5'>React Redux</span>
          <div className="flex lg:hidden ">
            <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 mt-4 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100'>VIEW PROJECT</p>
            <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 ml-6 mt-4 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100'>VIEW CODE</p>
          </div>
        </div>
        ))
      }

</section>
  )
}

export default Projects