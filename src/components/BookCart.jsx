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
                       <a href="/bookDetail"> <StoryBook/></a>
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
