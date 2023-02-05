import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'




const Navbar = () => {
    const [Nav, setNav] = useState(false)

    const links = [{
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'About'
    },
    {
        id: 3,
        link: 'Portfolio'
    },
    {
        id: 4,
        link: 'Technologies'
    },
    {
        id: 5,
        link: 'contact'
    }
    ]



    return (
        <div className='flex justify-between items-center w-full h-20 px-4  text-white fixed bg-black'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Vishal</h1>
            </div>


            {/* Links for Desktop */}
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => {
                    return (
                        <li
                            key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                            <Link to={link} smooth duration={700}>{link}</Link>
                        </li>
                    )
                })}
            </ul>


            <div onClick={() => setNav(!Nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>


            {/* Links for Mobile and the three dots thing */}
            {Nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

                {links.map(({ id, link }) => {
                    return (
                        <li
                            key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                            <Link onClick={() => { setNav(!Nav) }} to={link} smooth duration={700}>{link}</Link>
                        </li>
                    )
                })}

            </ul>}





        </div>
    )
}

export default Navbar
