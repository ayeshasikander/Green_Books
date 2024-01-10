import React from 'react';
import StoryBook from './StoryBook';

const BookCart = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                    <div className="text-center p-4">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Green Book Chapters</h1>
                    </div>
                    <div className="mt-10">
                        {/* <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                            <div className="w-48 h-64 rounded-lg bg-gray-200 relative p-4 border-2 border-gray-300 transition duration-500 ease-out overflow-visible hover:border-blue-500 hover:shadow-md">
                                <div className="text-black h-full grid place-content-center gap-2">
                                    <p className="text-2xl font-bold">Card title</p>
                                    <p className="text-gray-500">Here are the details of the card</p>
                                </div>
                                <button className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-2/3 w-3/5 rounded-md border-none bg-blue-500 text-white text-base px-4 py-2 opacity-0 transition duration-300 ease-out hover:translate-y-1/2 opacity-100">
                                    More info
                                </button>
                            </div>
                        </div> */}
                        <StoryBook/>
                    </div>
                    <a href="/bookCollection" className="inline-block mt-8 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700">
                        More Book Collection
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BookCart;
