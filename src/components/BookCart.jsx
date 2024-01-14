import React, { useEffect, useState } from 'react';
import StoryBook from './StoryBook';
import Search from './Search';
import styled from 'styled-components';
import BookFetch from './BookFetch';

const BookCart = () => {

    const [fetchBooks, setFetchBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
        setDisplayBooks(fetchBooks);
    }, [fetchBooks]);

    const updateBooks = (books) => {
        setFetchBooks(books)
    }
    if (loading) {
        return (
            <div className='text-center text-[60px] font-bold text-red-800'>Processesing...</div>
        )
    }


    return (
        <CartConainter className="relative overflow-hidden">
            <div className="pb-80  px-14 sm:pb-40 sm:pt-24 lg:pb-48  ">
                <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 text-center">
                    <Search updateBooks={updateBooks} />
                    <div className="text-center p-4">
                        <h1 className="text-4xl font-bold tracking-tight text-[#27170c] sm:text-6xl">Vegetarian Time's</h1>
                    </div>
                    <div className="mt-10 flex flex-row flex-wrap gap-14 items-center justify-center">
                        {displayBooks.length > 0 ? (
                            displayBooks.map((data, index) => (
                                <StoryBook key={index} data={data} />
                            ))
                        ) : (
                            <BookFetch />
                        )}
                    </div>

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
