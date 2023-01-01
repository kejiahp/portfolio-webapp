import { Github, Twitter, Linkedin, FrontendMentor } from '../assets/NavBar/svgs'

const NavBar = () => {
  return (
    <div className="flex justify-between py-5 px-24">
        <div className='font-bold text-3xl text-custBlack-400 cursor-pointer'>kejiah</div>
        <div className=' flex w-40 justify-between items-center'>
                <Github style='w-4 h-4 cursor-pointer hover:scale-125 transition ease-in delay-100'/>
                <FrontendMentor style='w-4 h-4 cursor-pointer hover:scale-125 transition ease-in delay-100'/>
                <Linkedin style='w-4 h-4 cursor-pointer hover:scale-125 transition ease-in delay-100'/>
                <Twitter style='w-4 h-4 cursor-pointer hover:scale-125 transition ease-in delay-100'/>
        </div>
    </div>
  )
}

export default NavBar