import React from 'react';
import './ReasonCard.css';

const ReasonCard = ({ title, description, icon }) => {
  return (
    <div className="reason-card">
      <div className="reason-content">
        <h3 className="reason-title">{title}</h3>
        <p className="reason-description">{description}</p>
      </div>
      <div className="reason-icon">
        <img src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default ReasonCard;
