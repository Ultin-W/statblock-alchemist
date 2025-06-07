import React, { useState } from 'react';
import './FieldGroup.scss';

const FieldGroup = ({ title, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = () => setExpanded(prev => !prev);

  return (
    <fieldset className="field-group">
      <div className="field-group__header">
        <button
          type="button"
          className="field-group__toggle"
          onClick={toggle}
          aria-expanded={expanded}
          aria-controls={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {expanded ? '▼' : '▶'} {title}
        </button>
      </div>

      {expanded && (
        <div
          id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="field-group__content"
        >
          {children}
        </div>
      )}
    </fieldset>
  );
};

export default FieldGroup;
