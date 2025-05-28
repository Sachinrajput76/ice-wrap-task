import React from 'react';
import './Dialog.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const Dialog = ({ header, content, footer }) => (
  <div className="dialog-overlay">
    <div className="dialog-container">
      <Header {...header} />
      <Content>{content}</Content>
      <Footer {...footer} />
    </div>
  </div>
);

export default Dialog;
