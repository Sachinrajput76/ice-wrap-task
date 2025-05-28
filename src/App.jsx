import React, { useState } from 'react';
import Dialog from './components/Dialog/Dialog';
// import SachinDialogModal from 'sachin-dialog-modal';
import './App.css';

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const dialogProps = {
    header: {
      icon: '📢',
      title: 'System Alert',
      buttons: [
        { label: 'Help', onClick: () => alert('Help Clicked') },
        { label: 'Info', onClick: () => alert('Info Clicked') },
        { label: 'Close', onClick: () => setShowDialog(false) },
      ],
    },
    content: <p>This dialog contains your message or interactive content.</p>,
    footer: {
      buttons: [
        { label: 'Cancel', onClick: () => setShowDialog(false) },
        { label: 'Save', onClick: () => alert('Saved!') }
      ],
      info: 'Please review your input before saving.'
    }
  };

  return (
    <div className="app-container">
      <header className="hero-section">
        <h1>IceWarp Dialog Task</h1>
        {/* <SachinDialogModal /> */}
        <p>
          This task demonstrates the implementation of a modular Dialog Window component in React.
          It is built using Vite and follows a Lego-style architecture with reusable subcomponents.
        </p>
        <button className="open-dialog-btn" onClick={() => setShowDialog(true)}>
          Open Dialog Example
        </button>
      </header>

      {showDialog && <Dialog {...dialogProps} />}
    </div>
  );
}

export default App;
