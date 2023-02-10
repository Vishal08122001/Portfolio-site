import React from "react";
import bookmyshow from "../assets/portfolio/bookmyshow.jpg";
import texttransition from "../assets/portfolio/texttransition.png";
import resumebuilder from '../assets/portfolio/resumebuilder.jpg'


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: resumebuilder,
            href: 'https://resume-buildd.netlify.app',
            code: "https://github.com/Vishal08122001/Resume-Builder"
        },
        {
            id: 2,
            src: texttransition,
            href: 'https://texttransition.netlify.app/',
            code: "https://github.com/Vishal08122001/TextTransition-App"
        },
        {
            id: 3,
            src: bookmyshow,
            href: 'https://bookmyshow-4oos.onrender.com/',
            code: "https://github.com/Vishal08122001/Bookmyshow"
        }
    ];

    return (
        <div
            name="Portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8" style={{ paddingTop: '7rem' }}>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="text-gray-400 py-6 max-w-xxl">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, href, code }) => (
                        <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <a href={href} target="_blank" rel="noreferrer" className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    Demo
                                </a>
                                <a href={code} target="_blank" rel="noreferrer" className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
