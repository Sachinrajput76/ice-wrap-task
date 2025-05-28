import React from 'react';

const Content = ({ children }) => (
  <div style={{
    minHeight: '120px',
    border: '1px dashed #ccc',
    padding: '1rem'
  }}>
    {children}
  </div>
);

export default Content;
