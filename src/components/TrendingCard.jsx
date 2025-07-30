import React from 'react';
import './TrendingCard.css';

const TrendingCard = ({ image, number }) => {
  return (
    <div className="trending-card">
      <img src={image} alt="Trending Poster" className="poster" />
      <div className="number-overlay">{number}</div>
    </div>
  );
};

export default TrendingCard;
