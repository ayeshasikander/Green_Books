import React from 'react';
import styled from 'styled-components';

const StoryBook = () => {
    return (
        <Story className="book">
            <p>Hello</p>
            <Cover className="cover">
                <p>Hover Me</p>
            </Cover>
        </Story>
    )
}

const Story = styled.div`
    position: relative;
    border-radius: 10px;
    width: 220px;
    height: 300px;
    background-color: whitesmoke;
    box-shadow: 1px 1px 12px #000;
    transform: perspective(2000px) preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
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

    ${Story}:hover & {
        transition: all 0.5s;
        transform: rotatey(-80deg);
    }
`;

export default StoryBook;
