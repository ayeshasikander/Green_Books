import React, {useState, useEffect } from 'react';
import DefaultBook from './DefaultBook';

const BookFetch = () => {
    const [magzine,setMagzine] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response=await fetch('https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyDn_TMqEHDKMAlbPvTD2pqIv0vqnGq6V6A')
                const data=await response.json();
                if (data.items) {
                    setMagzine(data.items);
                }else{
                    setError("No book found");
                }
            } catch (error) {
                setError("Error fetching data");
            }
        }
        fetchData();
    },[])

    if(error){
        <p>Error:{error}</p>
    }

    return (
        <div className="flex flex-row flex-wrap gap-14 items-center justify-center">
            {magzine.map((book, index) => (
                <DefaultBook key={index} data={book} />
            ))}
        </div>
    )
}

export default BookFetch
