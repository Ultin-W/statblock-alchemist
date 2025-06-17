import React, { useState } from 'react';
import './FieldGroup.scss';

const FieldGroup = ({ title, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = () => setExpanded(prev => !prev);

  // Generate HTML-safe ID by keeping only letters, numbers, hyphens, and underscores
  const generateSafeId = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove all non-alphanumeric characters except spaces
      .replace(/\s+/g, '-')        // Replace spaces with hyphens
      .replace(/--+/g, '-')        // Replace multiple consecutive hyphens with single hyphen
      .replace(/^-|-$/g, '');      // Remove leading/trailing hyphens
  };

  const sectionId = `section-${generateSafeId(title)}`;

  return (
    <fieldset className="field-group">
      <div className="field-group__header">
        <button
          type="button"
          className="field-group__toggle"
          onClick={toggle}
          aria-expanded={expanded}
          aria-controls={sectionId}
        >
          {expanded ? '▼' : '▶'} {title}
        </button>
      </div>

      {expanded && (
        <div
          id={sectionId}
          className="field-group__content"
        >
          {children}
        </div>
      )}
    </fieldset>
  );
};

export default FieldGroup;
