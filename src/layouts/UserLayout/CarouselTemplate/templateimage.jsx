import React from 'react';

const templateimage = ({ imageSrc, text }) => {
  return (
    <img
      className="d-block w-100"
      src={imageSrc}
      alt={text}
    />
  );
};

export default templateimage;
