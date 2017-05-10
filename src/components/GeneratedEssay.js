import React, { PropTypes } from 'react';

const GeneratedEssay = ({ essayText }) => (
  <div>
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