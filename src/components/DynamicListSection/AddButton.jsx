import React from 'react';
import './AddButton.scss';

const AddButton = ({ onClick, label = "Add Item" }) => {
  return (
    <button type="button" onClick={onClick} className="add-button">
      {label}
    </button>
  );
};

export default AddButton;