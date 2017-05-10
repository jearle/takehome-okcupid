import React, { PropTypes } from 'react';

require('./GeneratedEssay.scss');

const GeneratedEssay = ({ essayText }) => (
  <div className={`generateEssay`}>
    <h1>
      Your essay text
    </h1>
    <p>
      {essayText}
    </p>
  </div>
);

GeneratedEssay.propTypes = {
  essayText: PropTypes.string.isRequired,
};

export default GeneratedEssay;