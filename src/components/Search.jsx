import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Search = ({updateBooks}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchBook = (evnt) => {
    if (evnt.key === 'Enter') {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDn_TMqEHDKMAlbPvTD2pqIv0vqnGq6V6A`)
      .then(res => {
        const fetchBooks = res.data.items || [];
        updateBooks(fetchBooks);
      })
      .catch(error=>console.log(error));
      }
      
  }

return (
  <SearchContainer>
    <SearchBar className="form">
      <button>
        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
          <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
      <input className="input" placeholder="Enter your book name" required="" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyPress={searchBook} />
      <button className="reset" type="reset">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </SearchBar>
  </SearchContainer>
);
};

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const SearchBar = styled.div`
  button {
    border: none;
    background: none;
    color: #5F3E2E;
  }
  
  & {
    --timing: 0.3s;
    --width-of-input: 350px;
    --height-of-input: 40px;
    --border-height: 2px;
    --input-bg: #fff;
    --border-color: #5E3C2C;
    --border-radius: 30px;
    --after-border-radius: 1px;
    position: relative;
    width: var(--width-of-input);
    height: var(--height-of-input);
    display: flex;
    align-items: center;
    padding-inline: 0.8em;
    border-radius: var(--border-radius);
    transition: border-radius 0.5s ease;
    background: var(--input-bg, #fff);
  }
  
  .input {
    font-size: 1rem;
    background-color: transparent;
    width: 100%;
    height: 100%;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
  }
  
  &:before {
    content: "";
    position: absolute;
    background: var(--border-color);
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: var(--border-height);
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform var(--timing) ease;
  }
  
  &:focus-within {
    border-radius: var(--after-border-radius);
  }
  
  input:focus {
    outline: none;
  }
  
  &:focus-within:before {
    transform: scale(1);
  }
  
  .reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
  }
  
  .input:not(:placeholder-shown) ~ .reset {
    opacity: 1;
    visibility: visible;
  }
  
  svg {
    width: 17px;
    margin-top: 3px;
  }
`;

export default Search;
