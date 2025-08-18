import React, { useState, useEffect, useRef } from 'react';
import './ExportModal.scss';

const ExportModal = ({ isOpen, onClose, exportData }) => {
  const [copied, setCopied] = useState(false);
  const [activeFormat, setActiveFormat] = useState('vtt');
  const modalRef = useRef(null);
  const previouslyFocusedElementRef = useRef(null);

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

  // Get all focusable elements within the modal
  const getFocusableElements = () => {
    if (!modalRef.current) return [];

    const focusableSelectors = [
      'button:not([disabled])',
      '[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',');

    return Array.from(modalRef.current.querySelectorAll(focusableSelectors));
  };

  // Focus management when modal opens/closes
  useEffect(() => {
    // Handle focus trapping - defined inside useEffect to avoid dependency issues
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    if (isOpen) {
      // Store the currently focused element
      previouslyFocusedElementRef.current = document.activeElement;

      // Focus the modal after a small delay to ensure it's rendered
      const timer = setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 100);

      // Add event listeners
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      // Return focus to the previously focused element when modal closes
      if (previouslyFocusedElementRef.current) {
        previouslyFocusedElementRef.current.focus();
      }
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="export-modal-overlay" onClick={onClose}>
      <div
        className="export-modal"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="export-modal-title"
        tabIndex={-1}
      >
        <div className="export-modal-header">
          <h3 id="export-modal-title">Export</h3>
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close export dialog"
          >
            ×
          </button>
        </div>

        <div className="export-modal-content">
          <div className="format-selector" role="group" aria-label="Export format selection">
            <button
              className={`format-button ${activeFormat === 'vtt' ? 'active' : ''}`}
              onClick={() => handleFormatChange('vtt')}
              aria-pressed={activeFormat === 'vtt'}
            >
              Foundry VTT
            </button>
            <button
              className={`format-button ${activeFormat === 'customMarkdown' ? 'active' : ''}`}
              onClick={() => handleFormatChange('customMarkdown')}
              aria-pressed={activeFormat === 'customMarkdown'}
            >
              Homebrewery Markdown
            </button>
          </div>

                    <p id="export-instructions" className="export-instructions">
            {activeFormat === 'vtt'
              ? 'Copy this text and paste it into Foundry VTT\'s 5e Statblock Importer to create your monster:'
              : 'Copy this Homebrewery markdown format for use in your document:'
            }
          </p>

          <div className="export-text-container">
            <label htmlFor="export-textarea" className="visually-hidden">
              {activeFormat === 'vtt'
                ? 'Foundry VTT export text'
                : 'Homebrewery Markdown export text'}
            </label>
            <textarea
              id="export-textarea"
              className="export-text"
              value={getCurrentExportText()}
              readOnly
              rows={20}
              aria-describedby="export-instructions"
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