import React from 'react'

const Welcome = () => {
  return (
    <div className='px-24'>
        <section>
           <p className='text-custBlack-400 font-bold text-7xl'>Nice to meet you!</p>
           <p className='text-custBlack-400 font-bold text-7xl'>I’m Popoola Morenikeji.</p> 
        </section>
        <div className='w-2/6 mt-8'>
            <p className='text-custBlack-300 text-lg leading-7'>Based in the Nigerian, I’m a Software Engineer passionate about building accessible web apps that users love.</p>
        </div>
        <p className='text-custBlack-400 uppercase w-fit font-bold leading-6 mt-20 after:h-1 after:bg-custGreen after:block after:bottom-0 after:left-0 after:w-full'>Contact Me</p>
    </div>
  )
}

export default Welcome