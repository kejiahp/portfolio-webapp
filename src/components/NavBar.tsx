import { Github, Twitter, Linkedin, FrontendMentor } from '../assets/NavBar/svgs'

const NavBar = () => {
  return (
    <div className="flex justify-between py-5 mb-6 px-24">
        <div className='font-bold text-3xl text-custBlack-400'>kejiah</div>
        <div className='bg-custBlack-100 flex w-40 justify-between items-center'>
                <Github style='w-4 h-4'/>
                <FrontendMentor style='w-4 h-4'/>
                <Twitter style='w-4 h-4'/>
                <Linkedin style='w-4 h-4'/>
        </div>
    </div>
  )
}

export default NavBar