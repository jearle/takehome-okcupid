import React, { PropTypes } from 'react';

require('./GeneratedEssay.scss');

const onClickHandler = (onClick, shouldShowEditButton) => !shouldShowEditButton ? () => undefined  : onClick

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
      onClick={onClickHandler(onEditButtonClick, shouldShowEditButton)}
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