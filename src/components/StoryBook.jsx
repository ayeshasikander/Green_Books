import React from "react";
import styled from "styled-components";

const StoryBook = ({ book }) => {
  console.log(book)
 
  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        return (
          <Story key={item.id} className="book">
            <p>Hello</p>
            <Cover className="cover">
              <img src={thumbnail} alt="Thumbnail" />
            </Cover>
          </Story>
        );
      })}
    </>
  );
};

const Story = styled.div`
  position: relative;
  border-radius: 10px;
  width: 200px;
  height: 300px;
  background-color: #D2C5BE;
  box-shadow: 1px 1px 12px #000;
  transform: perspective(2000px) preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
 
  @media screen and (max-width: 688px) {
    width: 200px;
    height: 300px;
  }
`;

const Cover = styled.div`
  top: 0;
  position: absolute;
  background-color: lightgray;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  transform-origin: 0;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: fill;
  overflow: hidden;

  ${Story}:hover & {
    transition: all 0.5s;
    transform: rotatey(-80deg);
  }
`;

export default StoryBook;
