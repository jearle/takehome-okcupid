import React, { PropTypes } from 'react';

require('./Edit.scss');

const curryOnChange = (onChange) => (event) => onChange(event.target.value);

const Edit = ({ essayText, onChange, onStartOver }) => (
  <div className={`edit`}>
    <h1>
      Your essay text
    </h1>
    <textarea
      value={essayText}
      onChange={curryOnChange(onChange)}
    />
    <button
      onClick={onStartOver}
    >
      Start over
    </button>
  </div>
);

Edit.propTypes = {
  essayText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onStartOver: PropTypes.func.isRequired,
};

export default Edit;