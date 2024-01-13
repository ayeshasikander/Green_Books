import React from "react";
import loading from "../assets/leather.png";
const Loader = () => {
  return (
    <div className="relative bg-black h-screen w-full flex items-center justify-center">
      <div className="w-32 aspect-square rounded-full absolute flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white _0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#390B04_0deg,#562315_180deg,transparent_180deg,transparent_360deg)]">
        <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#562315_0deg,#000000_180deg,transparent_180deg,transparent_360deg)]"></span>
      </div>

      <img src={loading} alt="Loading...." />
    </div>
  );
};

export default Loader;
