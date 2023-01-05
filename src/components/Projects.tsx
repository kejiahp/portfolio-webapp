import Image from 'next/image'
import React from 'react'
import PrjectImage from '../assets/Bitmap.png'

const Projects = () => {
  return (
    <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
    <div className='cursor-pointer'>
      <div className='target-con'>
        <Image className='w-full' src={PrjectImage} alt="Project Image" priority/>
        <div className='target'>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW PROJECT</a></span>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW CODE</a></span>
        </div>
      </div>
      <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
      <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
    </div>
    <div className='cursor-pointer'>
      <div className='target-con'>
        <Image className='w-full' src={PrjectImage} alt="Project Image" priority/>
        <div className='target'>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW PROJECT</a></span>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW CODE</a></span>
        </div>
      </div>
      <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
      <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
    </div>
    <div className='cursor-pointer'>
      <div className='target-con'>
        <Image className='w-full' src={PrjectImage} alt="Project Image" priority/>
        <div className='target'>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW PROJECT</a></span>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW CODE</a></span>
        </div>
      </div>
      <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
      <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
    </div>
    <div className='cursor-pointer'>
      <div className='target-con'>
        <Image className='w-full' src={PrjectImage} alt="Project Image" priority/>
        <div className='target'>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW PROJECT</a></span>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW CODE</a></span>
        </div>
      </div>
      <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
      <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
    </div>
    <div className='cursor-pointer'>
      <div className='target-con'>
        <Image className='w-full' src={PrjectImage} alt="Project Image" priority/>
        <div className='target'>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW PROJECT</a></span>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW CODE</a></span>
        </div>
      </div>
      <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
      <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
    </div>
    <div className='cursor-pointer'>
      <div className='target-con'>
        <Image className='w-full' src={PrjectImage} alt="Project Image" priority/>
        <div className='target'>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW PROJECT</a></span>
          <span className='text-custBlack-400 relative after:block after:w-full after:bottom-0 after:bg-custGreen after:absolute after:left-0 after:h-px text-sm tracking-widest font-bold mt-4 hover:text-custGreen ease-in transition duration-200'><a>VIEW CODE</a></span>
        </div>
      </div>
      <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
      <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
    </div>

</section>
  )
}

export default Projects