import React from "react";
import loading from "../assets/lib.mp4";
import styled, { keyframes } from 'styled-components';


const Loader = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <LoaderContainer>
        <span></span>
      </LoaderContainer>

      <video className="inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={loading} type="video/mp4" />
      </video>
      {/* <img src={loading} alt="Loading...." /> */}
    </div>
  );
};
const radar81 = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.55);
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 20px;
    background: transparent;
    border: 1px dashed #444;
    border-radius: 50%;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25), inset 5px 5px 35px rgba(0, 0, 0, 0.25);
  }

  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px dashed #444;
    box-shadow: inset -5px -5px 25px rgba(0, 0, 0, 0.25), inset 5px 5px 35px rgba(0, 0, 0, 0.25);
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    animation: ${radar81} 2s linear infinite;
    border-top: 1px dashed #fff;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: red;
      transform-origin: top left;
      transform: rotate(-55deg);
      filter: blur(30px) drop-shadow(20px 20px 20px seagreen);
    }
  }
`;

export default Loader;
