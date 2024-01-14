import React from "react";
import styled from "styled-components";

const Service = () => {
  return (
    <ServiceContainer className="bg-[#78523D] py-14 relative">
      <div className="flex flex-col justify-center items-center text-base font-medium text-white">
        <div className="h-20 w-20 m-2 flex-shrink-0 overflow-hidden border rounded-full border-gray-200">
          <img
            src="https://i.pinimg.com/736x/5f/ea/0f/5fea0f78ac11a1fcb5bd0b75baaa0b8e.jpg"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3>Affordable Price</h3>
      </div>
      <div className="flex flex-col justify-center items-center text-base font-medium text-white">
        <div className="h-20 w-20 m-2 flex-shrink-0 overflow-hidden border rounded-full border-gray-200">
          <img
            src="https://static.vecteezy.com/system/resources/previews/004/911/390/original/book-icon-template-black-color-editable-book-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3>Best Quality</h3>
      </div>
      <div className="flex flex-col justify-center items-center text-base font-medium text-white">
        <div className="h-20 w-20 m-2 flex-shrink-0 overflow-hidden border rounded-full border-gray-200">
          <img
            src="https://t3.ftcdn.net/jpg/05/76/98/00/360_F_576980012_5aSyasmG7oJprEZjX6tMKLijLbuZh0qI.jpg"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3>24/7 Customer Service</h3>
      </div>
      <div className="flex flex-col justify-center items-center text-base font-medium text-white">
        <div className="h-20 w-20 m-2 flex-shrink-0 overflow-hidden border rounded-full border-gray-200">
          <img
            src="https://img.freepik.com/premium-vector/free-delivery-service-logo-badge-free-shipping-order-icon-vector_332533-1197.jpg?w=2000"
            alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3>Fast Delivery</h3>
      </div>
    </ServiceContainer>
  );
};

const ServiceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
`;

export default Service;
