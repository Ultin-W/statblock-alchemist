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
      <legend className="field-group__legend">
        <button
          type="button"
          className="field-group__toggle"
          onClick={toggle}
          aria-expanded={expanded}
          aria-controls={sectionId}
        >
          <span className="field-group__toggle-icon">
            {expanded ? '▼' : '▶'}
          </span>
          <span className="field-group__toggle-text">
            {title}
          </span>
        </button>
      </legend>

      <div
        id={sectionId}
        className={`field-group__content ${expanded ? 'field-group__content--expanded' : 'field-group__content--collapsed'}`}
      >
        {children}
      </div>
    </fieldset>
  );
};

export default FieldGroup;
