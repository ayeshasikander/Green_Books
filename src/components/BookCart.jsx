import React, { useEffect, useState } from 'react';
import StoryBook from './StoryBook';
import Search from './Search';
import styled from 'styled-components';

const BookCart = () => {

    const [fetchBooks, setFetchBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        setDisplayBooks(fetchBooks);
    }, [fetchBooks]);

    const updateBooks = (books) => {
        setFetchBooks(books)
    }

    return (
        <CartConainter className="relative overflow-hidden">
            <div className="pb-80  px-14 sm:pb-40 sm:pt-24 lg:pb-48  ">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 text-center">
                    <Search updateBooks={updateBooks} />
                    <div className="text-center p-4">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Green Book Chapters</h1>
                    </div>
                    <div className="mt-10 flex flex-row flex-wrap gap-14 items-center justify-center">
                        {
                            displayBooks.map((data, index) => (
                                <StoryBook key={index} data={data} />
                            ))
                        }

                    </div>
                    {/* <a href="/bookCollection" className="inline-block mt-8 rounded-md border border-transparent bg-[#583928] px-8 py-3 text-center font-medium text-white hover:bg-[#78523D]">
                        More Book Collection
                    </a> */}
                </div>

            </div>
        </CartConainter>
    );
};

const CartConainter = styled.div`
background-image: url(https://media.newyorker.com/photos/59ee325f1685003c9c28c4ad/16:9/w_5616,h_3159,c_limit/Heller-Kirkus-Reviews.jpg);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`;


export default BookCart;
