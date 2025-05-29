import React, { useState } from 'react';
import CustomDialogModal from './components/Dialog/Dialog';
import ExternalDialogModal from 'sachin-dialog-modal'; // Make sure sachin-dialog-modal exports a default component
import './App.css';

function App() {
  const [showCustomDialog, setShowCustomDialog] = useState(false);
  const [showExternalDialog, setShowExternalDialog] = useState(false);

  const customDialogProps = {
    headerProps: {
      icon: '📢',
      title: 'System Alert',
      buttons: [
        { label: 'Help', onClick: () => alert('Help Clicked') },
        { label: 'Info', onClick: () => alert('Info Clicked') },
        { label: 'Close', onClick: () => setShowCustomDialog(false) },
      ],
    },
    contentProps: (
      <p>This dialog contains your message or interactive content.</p>
    ),
    footerProps: {
      buttons: [
        { label: 'Cancel', onClick: () => setShowCustomDialog(false) },
        { label: 'Save', onClick: () => alert('Saved!') },
      ],
      info: 'Please review your input before saving.',
    },
    closeOnOutsideClick: true,
    onClose: () => setShowCustomDialog(false),
  };

  const externalDialogProps = {
    headerProps: {
      icon: '📢',
      title: 'System Alert from External Library',
      buttons: [
        { label: 'Help', onClick: () => alert('Help Clicked') },
        { label: 'Info', onClick: () => alert('Info Clicked') },
        { label: 'Close', onClick: () => setShowExternalDialog(false) },
      ],
    },
    contentProps: (
      <p>This dialog is powered by the external <code>sachin-dialog-modal</code> package.</p>
    ),
    footerProps: {
      buttons: [
        { label: 'Cancel', onClick: () => setShowExternalDialog(false) },
        { label: 'Save', onClick: () => alert('Saved!') },
      ],
      info: 'This modal is imported from an external npm library.',
    },
    closeOnOutsideClick: true,
    onClose: () => setShowExternalDialog(false),
  };

  return (
    <div className="app-container">
      <header className="hero-section">
        <h1 className="app-title">Reusable Dialog Modal Demo</h1>
        <p className="description">
          This app demonstrates two implementations of a modular, reusable Dialog Modal component in React.
          <br /><br />
          <strong>Custom Dialog Modal:</strong> Locally built modal component<br />
          <strong>External Dialog Modal:</strong> From <code>sachin-dialog-modal</code>
        </p>

        <section className="btn-section">
          <button className="open-dialog-btn" onClick={() => setShowCustomDialog(true)}>
            Open Custom Dialog Modal
          </button>
          <button className="open-dialog-btn" onClick={() => setShowExternalDialog(true)}>
            Open External Dialog Modal
          </button>
        </section>

        <section className="steps">
          <h2>💡 How to Use the Dialog Modal Library</h2>
          <ol>
            <li>Install: <code>npm install sachin-dialog-modal</code></li>
            <li>Import: <code>import ExternalDialogModal from 'sachin-dialog-modal'</code></li>
            <li>Pass props for <code>headerProps</code>, <code>contentProps</code>, <code>footerProps</code></li>
            <li>Render it conditionally: <code>{`{show && <ExternalDialogModal {...props} />}`}</code></li>
          </ol>
        </section>
      </header>

      {showCustomDialog && <CustomDialogModal {...customDialogProps} />}
      {showExternalDialog && <ExternalDialogModal {...externalDialogProps} />}
    </div>
  );
}

export default App;
