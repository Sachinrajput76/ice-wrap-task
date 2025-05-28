import React from 'react';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const Footer = ({ buttons, info }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem'
  }}>
    {info && (
      <div style={{
        flex: 1,
        border: '1px dashed #aaa',
        padding: '0.5rem',
        fontSize: '0.9rem'
      }}>
        {info}
      </div>
    )}
    <ButtonGroup buttons={buttons} />
  </div>
);

export default Footer;
