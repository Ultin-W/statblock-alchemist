import React, { useState, useEffect } from 'react';
import './InputField.scss';

const InputField = ({ label, placeholder, type = 'text', setValue, error, ...registerProps }) => {
  // Use React Hook Form's name for the HTML ID
  const rhfName = registerProps.name;
  const htmlSafeId = rhfName?.replace(/\./g, '-');

  // State for clear button visibility
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

      // Show clear button when field has content
  const shouldShowClearButton = hasValue;

  // Event handlers
  const handleFocus = (e) => {
    // Call original onFocus if it exists
    if (registerProps.onFocus) {
      registerProps.onFocus(e);
    }
  };

  const handleBlur = (e) => {
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

  const handleInput = (e) => {
    // For number inputs, check if browser detected invalid input
    if (type === 'number' && e.target.validity?.badInput) {
      // Force trigger validation by calling React Hook Form's trigger
      // This will force the validation to run and show our custom error
      setTimeout(() => {
        if (registerProps.onChange) {
          // Create a fake event to trigger validation
          const fakeEvent = {
            target: {
              value: e.target.value,
              name: e.target.name,
              validity: e.target.validity
            }
          };
          registerProps.onChange(fakeEvent);
        }
      }, 0);
    }
  };



  const handleClear = () => {
    if (setValue && rhfName) {
      setValue(rhfName, '');
      setHasValue(false);
    }
  };

    const errorId = error ? `${htmlSafeId}-error` : undefined;

  return (
    <div className={`input-field ${error ? 'input-field--error' : ''}`}>
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
          onInput={handleInput}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={errorId}
        />
        {shouldShowClearButton && (
          <button
            type="button"
            className="input-clear-button"
            onClick={handleClear}
            aria-label={`Clear ${label}`}
            title={`Clear ${label}`}
          >
            ×
          </button>
        )}
      </div>
      {error && (
        <div id={errorId} className="input-error" role="alert">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default InputField;
