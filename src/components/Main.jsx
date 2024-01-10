import React from 'react';
import bg from '../assets/bg (1).mp4';
const Main = () => {
    return (
        <div className="relative">
            <video className="inset-0 w-full h-full object-cover" autoPlay loop muted>
                <source src={bg} type="video/mp4" />
            </video>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
                <h1 className='font-serif xl:text-4xl lg:text-2xl md:text-xl'>Hello! everyone loves literature...</h1>
            </div>
        </div>
    )
}

export default Main
