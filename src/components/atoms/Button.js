import React from "react";

const Button = ({ children, onclick, className }) => {
  return (
    <button className={className} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
