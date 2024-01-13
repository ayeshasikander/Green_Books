import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
const BookDetail = () => {
    const { id } = useParams();
    // console.log(id);

    const [bookDetail, setBookDetai] = useState({})
    const fetchBook = async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
        const data = await response.json()
        setBookDetai(data)
    };
    useEffect(() => {
        fetchBook(id);
    }, [id]);
    const getDescriptionHTML = () => {
        return { __html: bookDetail?.volumeInfo?.description || '' };
    };

    return (

        <div className="bg-white m-20">
            <div className="pt-6">
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{bookDetail?.volumeInfo?.title}</h1>
                    </div>

                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img src={bookDetail?.volumeInfo?.imageLinks?.thumbnail} alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
                        </div>

                        <form className="mt-10">
                            <button type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">

                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900" dangerouslySetInnerHTML={getDescriptionHTML()}></p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                            <div className="mt-4">
                                <ul className="list-disc space-y-2 pl-4 text-sm">
                                    <li className="text-gray-400"><span className="text-gray-600">Authors: {bookDetail?.volumeInfo?.authors}</span></li>
                                    <li className="text-gray-400"><span className="text-gray-600">Publisher: {bookDetail?.volumeInfo?.publisher}</span></li>
                                    <li className="text-gray-400"><span className="text-gray-600">Published Date: {bookDetail?.volumeInfo?.publishedDate}</span></li>
                                    <li className="text-gray-400"><span className="text-gray-600">Page Count: {bookDetail?.volumeInfo?.pageCount}</span></li>
                                    <li className="text-gray-400"><span className="text-gray-600">Content Version: {bookDetail?.volumeInfo?.contentVersion}</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Rating</h2>

                            <div className="mt-4 space-y-6">
                                <Rating />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookDetail;
