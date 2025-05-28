import React from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} style={{
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px'
  }}>
    {label}
  </button>
);


export default Button;
