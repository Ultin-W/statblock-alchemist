import React, { useState } from 'react';
import './ExportModal.scss';

const ExportModal = ({ isOpen, onClose, exportedText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(exportedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = exportedText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="export-modal-overlay" onClick={onClose}>
      <div className="export-modal" onClick={(e) => e.stopPropagation()}>
        <div className="export-modal-header">
          <h3>Export to VTT</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="export-modal-content">
          <p className="export-instructions">
            Copy this text and paste it into Foundry VTT's 5e Statblock Importer to create your monster:
          </p>

          <div className="export-text-container">
            <textarea
              className="export-text"
              value={exportedText}
              readOnly
              rows={20}
            />
          </div>

          <div className="export-actions">
            <button
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={handleCopy}
            >
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
            <button className="close-button-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;