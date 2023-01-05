import Image from 'next/image'
import React from 'react'
import { CircleOval, FlatOval, FlatOval2 } from '../assets/NavBar/svgs'
import Projects from './Projects'
import MyImage from '../assets/MyImage.png'

const Welcome = () => {
  return (
    <>
      <div className='px-24 mt-20 2xl:container 2xl:mx-auto'>
        <section className='relative py-24'>
          <FlatOval style='absolute top-0 -left-24'/>
          <FlatOval style='absolute top-4 -left-24'/>
          <FlatOval style='absolute top-8 -left-24'/>
          <FlatOval style='absolute top-12 -left-24'/>
            <section className='w-3/4'>
              <p className='text-custBlack-400 font-bold text-7xl'>Nice to meet you!</p>
              <p className='text-custBlack-400 font-bold text-7xl'>I’m <span className='after:h-1 after:bg-custGreen after:block  after:bottom-0 after:left-0 after:w-full after:absolute relative'>Popoola Morenikeji</span>.</p> 
            </section>
            <div className='w-2/6 mt-8'>
                <p className='text-custBlack-300 text-lg leading-7'>Based in the Nigerian, I’m a Highly motivated Software Engineer passionate about building accessible web apps that users love.</p>
            </div>
            <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 mt-20 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100'>Contact Me</p>
            <div className='bg-custBlack-200 w-128 -z-20 h-128 absolute right-0 -top-40'>
              <Image className='w-full h-full object-cover' priority alt="Morenikeji's Number" src={MyImage}/>
            </div>
          <CircleOval style='absolute bottom-14 right-1/3'/>
        </section>

        <section className='font-bold my-24 relative'>
          <div className="border-t border-custBlack-400 lg:grid-cols-3 grid gap-10 pt-16 md:text-left md:grid-cols-2 sm:grid-cols-1 text-center">
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
          <FlatOval2 style='absolute -right-24 bottom-0 -z-10'/>
          <FlatOval2 style='absolute -right-24 bottom-4 -z-10'/>
          <FlatOval2 style='absolute -right-24 bottom-8 -z-10'/>
          <FlatOval2 style='absolute -right-24 bottom-12 -z-10'/>
        </section>

        <section className='mb-24 sm:border-t-2 sm:border-custBlack-300 md:border-t-0 py-20'>
          <header className='flex justify-between items-center mb-4'>
            <p className='text-7xl font-bold text-custBlack-400'>Projects</p>
            <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100'>CONTACT ME</p>
          </header>
          <Projects />
        </section>

      </div>
    </>
  )
}

export default Welcome