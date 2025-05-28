import React from 'react';
import Button from '../Button/Button';

const ButtonGroup = ({ buttons }) => (
  <div style={{ display: 'flex', gap: '0.5rem' }}>
    {buttons?.map((btn, index) => (
      <Button key={index} label={btn.label} onClick={btn.onClick} />
    ))}
  </div>
);
export default ButtonGroup;
