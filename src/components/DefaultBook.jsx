import React from "react";
import styled from "styled-components";

const DefaultBook = ({ data }) => {
    console.log(data)


    return (
        <Story className="book">
            <Cover className="cover">
                {data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.thumbnail && (
                    <img src={data.volumeInfo.imageLinks.thumbnail} alt="Thumbnail" />
                )}

                <hr className="w-20 h-1 bg-[#371A06] mt-3" />
                <p>
                    Title: <br />
                    {data.volumeInfo.title}
                </p>
            </Cover>
            <div className="info flex flex-col">
                
                <p className="text-[#80302a]">
                    {data.volumeInfo.description.slice(0,100)}
                </p>

            </div>
        </Story>
    );
};

const Story = styled.div`
  position: relative;
  border-radius: 10px;
  width: 200px;
  height: 300px;
  background-color: #d2c5be;
  box-shadow: 1px 1px 12px #000;
  transform: perspective(2000px) preserve-3d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 17px;
  font-weight: 600;
  padding: 1rem;

  @media screen and (max-width: 688px) {
    width: 200px;
    height: 300px;
  }
`;

const Cover = styled.div`
  top: 0;
  position: absolute;
  background-color: #d2b092;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
  transform-origin: 0;
  box-shadow: 1px 1px 12px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${Story}:hover & {
    transition: all 0.5s;
    transform: rotatey(-80deg) scale(0.1);
  }
`;

export default DefaultBook;
