import React from 'react';

const Button = ({ color, bgColor, text, borderRadius, size, onClick }) => {
  return (
    <button
      type="button"
      style={{ color, backgroundColor: bgColor, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
