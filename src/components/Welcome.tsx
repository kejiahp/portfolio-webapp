import Image from 'next/image'
import React from 'react'
import PrjectImage from '../assets/Bitmap.png'

const Welcome = () => {
  return (
    <div className='px-24 mt-6'>
      <section>
          <section className='w-3/4'>
            <p className='text-custBlack-400 font-bold text-7xl'>Nice to meet you!</p>
            <p className='text-custBlack-400 font-bold text-7xl'>I’m <span className='after:h-1 after:bg-custGreen after:block  after:bottom-0 after:left-0 after:w-full after:absolute relative'>Popoola Morenikeji</span>.</p> 
          </section>
          <div className='w-2/6 mt-8'>
              <p className='text-custBlack-300 text-lg leading-7'>Based in the Nigerian, I’m a Highly motivated Software Engineer passionate about building accessible web apps that users love.</p>
          </div>
          <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 mt-20 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100'>Contact Me</p>
      </section>

      <section className='font-bold my-24'>
        <div className="border-t border-custBlack-400 grid-cols-3 grid gap-10 pt-16">
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>HTML</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2019} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>CSS</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2019} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>Javascript</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2019} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>NodeJS</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2021} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>Express</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2021} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>Typescript</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2021} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>Python</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2019} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>Django</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2020} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>NextJS</h1>
              <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2021} Years Experience</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-custBlack-400'>Many More</h1>
              <p className='text-custBlack-300 text-xs mt-5'>Trust me there are alot more, can't just fit them all in the page.😏🥲</p>
            </div>
        </div>
      </section>

      <section className='mb-24'>
        <header className='flex justify-between items-center mb-4'>
          <p className='text-7xl font-bold text-custBlack-400'>Projects</p>
          <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100'>CONTACT ME</p>
        </header>
        <section className='grid grid-cols-2 gap-10 mt-16'>
            <div className='cursor-pointer'>
              <div>
                <Image src={PrjectImage} alt="Project Image" priority/>
              </div>
              <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
              <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
            </div>
            <div className='cursor-pointer'>
              <div>
                <Image src={PrjectImage} alt="Project Image" priority/>
              </div>
              <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
              <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
            </div>
            <div className='cursor-pointer'>
              <div>
                <Image src={PrjectImage} alt="Project Image" priority/>
              </div>
              <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
              <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
            </div>
            <div className='cursor-pointer'>
              <div>
                <Image src={PrjectImage} alt="Project Image" priority/>
              </div>
              <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
              <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
            </div>
            <div className='cursor-pointer'>
              <div>
                <Image src={PrjectImage} alt="Project Image" priority/>
              </div>
              <h1 className='font-bold text-xl text-custBlack-400 mt-2'>Design App</h1>
              <p className='text-custBlack-300 text-sm mt-5'>React Redux</p>
            </div>
        </section>
      </section>

    </div>
  )
}

export default Welcome