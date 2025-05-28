import React from 'react';
import IconText from '../IconText/IconText';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const Header = ({ icon, title, buttons }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div>{icon}</div>
      <h2>{title}</h2>
    </div>
    <ButtonGroup buttons={buttons} />
  </div>
);

export default Header;
