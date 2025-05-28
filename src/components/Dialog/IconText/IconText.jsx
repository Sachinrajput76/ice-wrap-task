import React from 'react';

const IconText = ({ icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
    <span>{icon}</span>
    <h3>{text}</h3>
  </div>
);

export default IconText;
