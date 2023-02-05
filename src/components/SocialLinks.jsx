import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs'


function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>Linkedin <FaLinkedin size={30} /></>
            ),
            href: 'https://www.linkedin.com/in/vishal-chauhan-059601229/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>GitHub <FaGithub size={30} /></>
            ),
            href: 'https://github.com/Vishal08122001',
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30} /></>
            ),
            href: 'mailto : vc31142@gmail.com',
        },
        {
            id: 4,
            child: (
                <>Whatsapp <BsWhatsapp size={30} /></>
            ),
            href: 'https://wa.me/+918076929271',
            style: 'rounded-br-md',
        },
        {
            id: 5,
            child: (
                <>Resume <BsFillPersonLinesFill size={30} /></>
            ),
            href: '/Resume-1.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
            <ul>
                {links.map(({ child, id, href, style, download }) => {
                    return (
                        <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300 ${style}`} >
                            <a className='flex justify-between items-center w-full
                            text-white
                            ' href={href}
                                download={download}
                                target='_blank'
                                rel='noreferrer'
                            > {child}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SocialLinks
