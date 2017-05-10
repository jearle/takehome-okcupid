import React, { PropTypes } from 'react';

require('./GeneratedEssay.scss');

const GeneratedEssay = ({ essayText, shouldShowEditButton, onEditButtonClick }) => (
  <div className={`generateEssay`}>
    <h1>
      Your essay text
    </h1>
    <p>
      {essayText}
    </p>
    <button
      className={`${shouldShowEditButton || 'hide'}`}
      disabled={!shouldShowEditButton}
      onClick={onEditButtonClick}
    >
      Edit
    </button>
  </div>
);

GeneratedEssay.propTypes = {
  essayText: PropTypes.string.isRequired,
  shouldShowEditButton: PropTypes.bool.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
};

export default GeneratedEssay;