import React from 'react';
import cssImg from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import reactimg from '../assets/react.png'
import node from '../assets/node.png'
import redux from '../assets/redux.png'
import bootstrap from '../assets/bootstrap.png'
import mongoose from '../assets/mongoose.png'
import mongodb from '../assets/mongodb.png'





function Experience() {


    const experience = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: cssImg,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: redux,
            title: 'Redux',
            style: 'shadow-purple-500'
        },
        {
            id: 5,
            src: reactimg,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 7,
            src: node,
            title: 'NodeJS',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: mongoose,
            title: 'Mongoose',
            style: 'shadow-red-500'
        },
        {
            id: 9,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-500'
        },



    ]


    return (
        <div
            name="Technologies"
            className="sm:pt-20 bg-gradient-to-b from-gray-800 to-black w-full h-screen "
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div style={{ paddingTop: '10rem' }}>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Technologies
                    </p>
                    <p className="text-gray-400 py-6 max-w-xxl">These are the technologies I'm familier with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
                    {experience.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience
