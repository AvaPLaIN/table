"use client";

const Button = () => {
  const handleOnClick = () => {
    console.log("Click");
  };
  return <button onClick={handleOnClick}>Button</button>;
};

export default Button;
