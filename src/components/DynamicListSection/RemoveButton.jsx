import React from 'react';

const RemoveButton = ({ onClick, label = "Remove", index, className = "remove-button" }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(index)}
      className={className}
    >
      {label}
    </button>
  );
};

export default RemoveButton;