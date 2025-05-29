import React, { useState } from 'react';
import Dialog from './components/Dialog/Dialog';
import SachinDialog from 'sachin-dialog-modal';
import './App.css';

function App() {
  const [showDialog, setShowDialog] = useState(false);
  const [sachinDialog, setSachinDialog] = useState(false);

  const dialogProps2 = {
    header: {
      icon: '📢',
      title: 'System Alert from sachin dialog modal',
      buttons: [
        { label: 'Help', onClick: () => alert('Help Clicked') },
        { label: 'Info', onClick: () => alert('Info Clicked') },
        { label: 'Close', onClick: () => setSachinDialog(false) },
      ],
    },
    content: <p>This dialog contains your message or interactive content.</p>,
    footer: {
      buttons: [
        { label: 'Cancel', onClick: () => setSachinDialog(false) },
        { label: 'Save', onClick: () => alert('Saved!') }
      ],
      info: 'Please review your input before saving.'
    }
  };
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
        <button className="open-dialog-btn" onClick={() => setSachinDialog(true)}>
          Open Sachin Dialog Modal
        </button>
        {sachinDialog && <SachinDialog  {...dialogProps2} />}
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
