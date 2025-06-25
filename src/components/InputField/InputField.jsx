import React, { useState, useEffect } from 'react';
import './InputField.scss';

const InputField = ({ label, placeholder, type = 'text', setValue, ...registerProps }) => {
  // Use React Hook Form's name for the HTML ID
  const rhfName = registerProps.name;
  const htmlSafeId = rhfName?.replace(/\./g, '-');

  // State for clear button visibility
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  // Check initial value from React Hook Form
  useEffect(() => {
    const initialValue = registerProps.value || '';
    setHasValue(initialValue.toString().trim() !== '');
  }, [registerProps.value]);

  // Also check the actual DOM input value periodically for number inputs
  useEffect(() => {
    if (type === 'number') {
      const checkValue = () => {
        const input = document.getElementById(htmlSafeId);
        if (input) {
          const hasContent = input.value.trim() !== '' || input.validity?.badInput;
          setHasValue(hasContent);
        }
      };

      const interval = setInterval(checkValue, 100);
      return () => clearInterval(interval);
    }
  }, [type, htmlSafeId]);

  // Determine if clear button should be visible
  const shouldShowClearButton = hasValue && (isFocused || isHovered);

  // Event handlers
  const handleFocus = (e) => {
    setIsFocused(true);
    // Call original onFocus if it exists
    if (registerProps.onFocus) {
      registerProps.onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    // Call original onBlur if it exists
    if (registerProps.onBlur) {
      registerProps.onBlur(e);
    }
  };

    const handleChange = (e) => {
    // Track if field has content - for number inputs, also check if user is typing
    const hasContent = e.target.value.trim() !== '' || e.target.validity?.badInput;
    setHasValue(hasContent);

    // Call original onChange if it exists
    if (registerProps.onChange) {
      registerProps.onChange(e);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClear = () => {
    if (setValue && rhfName) {
      setValue(rhfName, '');
      setHasValue(false);
    }
  };

  return (
    <div
      className="input-field"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label htmlFor={htmlSafeId}>{label}</label>
      <div className="input-wrapper">
        <input
          {...registerProps}
          type={type}
          id={htmlSafeId}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {shouldShowClearButton && (
          <button
            type="button"
            className="input-clear-button"
            onClick={handleClear}
            aria-label={`Clear ${label}`}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
