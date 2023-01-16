import Image from 'next/image'
import React from 'react'
import { CircleOval, FlatOval, FlatOval2 } from '../assets/NavBar/svgs'
import Projects from './Projects'
import MyImage from '../assets/MyImage.png'

const Welcome = () => {
  return (
    <>
      <div className='px-12 lg:px-24 mt-20 2xl:container 2xl:mx-auto'>
        <section className='relative py-1 pt-10 md:py-24'>
          <FlatOval style='absolute top-0 md:-left-24 -left-32 -z-30'/>
          <FlatOval style='absolute top-4 md:-left-24 -left-32 -z-30'/>
          <FlatOval style='absolute top-8 md:-left-24 -left-32 -z-30'/>
          <FlatOval style='absolute top-12 md:-left-24 -left-32 -z-30'/>
          <div className="flex justify-center items-center flex-col md:block text-center md:text-left md:mt-0 mt-96">
              <section className=''>
                <p className='text-custBlack-400 font-bold md:text-7xl text-5xl'>Nice to meet you!</p>
                <p className='text-custBlack-400 font-bold md:text-7xl text-5xl'>I’m <span className='after:h-1 after:bg-custGreen after:block  after:bottom-0 after:left-0 after:w-full after:absolute relative'>Popoola Morenikeji</span>.</p> 
              </section>
              <div className='md:w-2/6 mt-8'>
                  <p className='text-custBlack-300 text-lg leading-7 mt-10 md:mt-0'>Based in the Nigerian, I’m a Highly motivated Software Engineer passionate about building accessible web apps that users love.</p>
              </div>
              <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 mt-10 md:mt-20 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100'>Contact Me</p>
          </div>
            <div className='bg-custBlack-200 md:w-128 -z-20 md:h-128 sm:w-80 h-[44rem] md:pt-[8rem] pt-[12rem] absolute md:right-0 md:-top-[11rem] -top-80 md:mx-0 mx-auto right-0 left-0 md:left-auto bg-opacity-70 shadow-white shadow-inner'>
              <Image className='w-full h-full object-cover' priority alt="Morenikeji's Number" src={MyImage}/>
            </div>
          {/* <CircleOval style='absolute bottom-14 right-1/3'/> */}
        </section>

        <section className='font-bold my-24 relative'>
          <div className="border-t border-custBlack-400 lg:grid-cols-3 grid gap-10 pt-16 md:text-left md:grid-cols-2 sm:grid-cols-1 text-center">
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>HTML</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2019} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>CSS</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2019} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>Javascript</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2019} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>NodeJS</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2021} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>Express</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2021} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>Typescript</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2021} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>Python</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2019} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>Django</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2020} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>NextJS</h1>
                <p className='text-custBlack-300 text-xs mt-5'>{new Date().getFullYear() - 2021} Years Experience</p>
              </div>
              <div>
                <h1 className='font-bold md:text-5xl text-3xl text-custBlack-400'>Many More</h1>
                <p className='text-custBlack-300 text-xs mt-5'>Trust me there are alot more, can't just fit them all in the page.😏🥲</p>
              </div>
          </div>
          {/* <FlatOval2 style='absolute -right-24 bottom-0 -z-10'/>
          <FlatOval2 style='absolute -right-24 bottom-4 -z-10'/>
          <FlatOval2 style='absolute -right-24 bottom-8 -z-10'/>
          <FlatOval2 style='absolute -right-24 bottom-12 -z-10'/> */}
        </section>

        <section className='mb-24 sm:border-t-2 border-custBlack-300 border-t-2 sm:border-custBlack-300 md:border-t-0 py-20'>
          <header className='flex sm:justify-between items-center mb-4 flex-col sm:flex-row'>
            <p className='md:text-7xl font-bold text-custBlack-400 text-3xl'>Projects</p>
            <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 after:mt-2 after:h-px after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full cursor-pointer hover:text-custGreen hover:scale-110 transition ease-in delay-100 ml-3 sm:mt-0 mt-10'>CONTACT ME</p>
          </header>
          <Projects />
        </section>

      </div>
    </>
  )
}

export default Welcome