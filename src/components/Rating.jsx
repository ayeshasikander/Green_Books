import React, { useState } from "react";
import styled from "styled-components";

const Rating = () => {
  const [rating, setRating] = useState(5);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  return (
    <Rate className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <StyledStar
          key={value}
          onClick={() => handleRatingClick(value)}
          filled={value <= rating ? "true" : "false"}
        />
      ))}
    </Rate>
  );
};

const Rate = styled.div`
  display: flex;
  gap: 5px;
  font-size: 40px;
`;

const StyledStar = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: ${({ filled }) => (filled === "true" ? "#ffc300" : "transparent")};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ffc300;
    transform: scale(1.2);
  }
`;

export default Rating;
