import React from 'react';

export interface ArrowProps {
  text:string;
}

const Arrow: React.FC<ArrowProps> = ({ text }) => {
  return (
    <div>{text}</div>
  );
};

export default Arrow;