import React from 'react';
import bg from '../assets/bg (2).mp4';

const Main = () => {
    return (
        <div className="sticky top-0  h-screen overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                <source src={bg} type="video/mp4" />
            </video>
           
        </div>
    );
}

export default Main;
