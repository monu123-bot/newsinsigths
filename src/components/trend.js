import React from 'react';

const Trends = ({ title, description }) => {
  return (
    <div className="trend">
      <h3 className="trend-title">{title}</h3>
      <p className="trend-description">{description}</p>
    </div>
  );
};

export default Trends;