import React from "react";

const SortButton = ({ id, text, onClick }) => {
  return (
    <div className="btn-sort" id={id} onClick={onClick}>
      {text} <span>➜</span>
    </div>
  );
};

export default SortButton;
