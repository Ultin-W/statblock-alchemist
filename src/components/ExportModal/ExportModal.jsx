import React, { useState } from 'react';
import './ExportModal.scss';

const ExportModal = ({ isOpen, onClose, exportData }) => {
  const [copied, setCopied] = useState(false);
  const [activeFormat, setActiveFormat] = useState('vtt');

  const getCurrentExportText = () => {
    return exportData?.[activeFormat] || '';
  };

  const handleCopy = async () => {
    const textToCopy = getCurrentExportText();
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleFormatChange = (format) => {
    setActiveFormat(format);
    setCopied(false);
  };

  if (!isOpen) return null;

  return (
    <div className="export-modal-overlay" onClick={onClose}>
      <div className="export-modal" onClick={(e) => e.stopPropagation()}>
        <div className="export-modal-header">
          <h3>Export</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="export-modal-content">
          <div className="format-selector">
            <button
              className={`format-button ${activeFormat === 'vtt' ? 'active' : ''}`}
              onClick={() => handleFormatChange('vtt')}
            >
              Foundry VTT
            </button>
            <button
              className={`format-button ${activeFormat === 'customMarkdown' ? 'active' : ''}`}
              onClick={() => handleFormatChange('customMarkdown')}
            >
              Homebrewery Markdown
            </button>
          </div>

                    <p className="export-instructions">
            {activeFormat === 'vtt'
              ? 'Copy this text and paste it into Foundry VTT\'s 5e Statblock Importer to create your monster:'
              : 'Copy this Homebrewery markdown format for use in your document:'
            }
          </p>

          <div className="export-text-container">
            <textarea
              className="export-text"
              value={getCurrentExportText()}
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