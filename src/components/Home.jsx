import React from 'react'
import Heroimg from '../assets/Heroimg.png'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'


function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-800 '>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='mt-8 text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions. Proven experience developing consumer-focused websites using HTML, CSS and JavaScript etc. Good knowledge of the best practices for web design, user experience, and speed.
                    </p>

                    <div>
                        <Link to='Portfolio' smooth duration={700} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={Heroimg} alt="my img" className='sm:mt-12 rounded-2xl mx-auto w-2/3 md:w-full mb-12 mt-5' />
                </div>
            </div>
        </div>
    )
}

export default Home
