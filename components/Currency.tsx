import React from "react";

interface IProps {
  price: number;
}

const Currency: React.FC<IProps> = ({ price }) => {
  return (
    <>
      {Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD", // Change this
      }).format(price)}
    </>
  );
};

export default Currency;
