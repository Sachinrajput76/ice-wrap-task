import React, { useEffect, useRef } from 'react';
import './Dialog.css';
import Header from './Header/Header';
import Content from './Content/Content';
import Footer from './Footer/Footer';

const CustomDialogModal = ({
  headerProps,
  contentProps,
  footerProps,
  closeOnOutsideClick = true,
  onClose,
}) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        closeOnOutsideClick &&
        dialogRef.current &&
        !dialogRef.current.contains(event.target)
      ) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeOnOutsideClick, onClose]);

  return (
    <div className="dialog-overlay">
      <div className="dialog-container" ref={dialogRef}>
        <Header {...headerProps} />
        <Content>{contentProps}</Content>
        <Footer {...footerProps} />
      </div>
    </div>
  );
};

export default CustomDialogModal;
