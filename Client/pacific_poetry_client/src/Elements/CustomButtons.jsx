// components/Button.jsx
import React from 'react';

const CustomButton = ({ text, backgroundColor, fontFamily, color = 'white', onClick }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#007bff',
    fontFamily: fontFamily || 'Arial, sans-serif',
    color,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text || 'Click'}
    </button>
  );
};

export default CustomButton;
