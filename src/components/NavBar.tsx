import { Github, Twitter, Linkedin, FrontendMentor } from '../assets/NavBar/svgs'

const NavBar = () => {
  return (
    <div className="flex md:justify-between py-5 px-12 lg:px-24 md:flex-row flex-col justify-center items-center pb-24 md:pb-8">
        <div className='font-bold text-3xl text-custBlack-400 cursor-pointer'>kejiah</div>
        <div className=' flex w-48 justify-between items-center mt-5 md:mt-0'>
                <Github style='w-6 h-6 cursor-pointer hover:scale-125 transition ease-in delay-100'/>
                <FrontendMentor style='w-6 h-6 cursor-pointer hover:scale-125 transition ease-in delay-100'/>
                <Linkedin style='w-6 h-6 cursor-pointer hover:scale-125 transition ease-in delay-100'/>
                <Twitter style='w-6 h-6 cursor-pointer hover:scale-125 transition ease-in delay-100'/>
        </div>
    </div>
  )
}

export default NavBar