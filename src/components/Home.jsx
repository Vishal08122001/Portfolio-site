import React from 'react'
import Heroimg from '../assets/hero1.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import Typewriter from "typewriter-effect";



function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to bg-gray-800 '>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='flex flex-col items-center justify-center mt-8 text-xl sm:text-4xl font-bold text-white'>
                        <p>Hii, I'm a </p>
                        <Typewriter
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Frontend Developer!")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Backend Developer!")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("Full Stack Developer!")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start();
                            }}
                        />

                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Develop web applications and backend systems using the MERN stack with a passionate and analytical mindset.
                        Build clear and concise code that is easy to maintain and troubleshoot while demonstrating strong learning aptitude.

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

                <div style={{ height: '400px', width: '400px' }} className='mt-5'>
                    <img src={Heroimg} alt="my img" className='sm:mt-12 rounded-2xl  mx-auto w-2/3 md:w-full ' />
                </div>
            </div>
        </div>
    )
}

export default Home
