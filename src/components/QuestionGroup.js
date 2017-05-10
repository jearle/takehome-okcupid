import React, { PropTypes } from 'react';
import Input from './Input';

const curryOnChange = (onChange, fieldName) => (value) => onChange(fieldName, value);

const QuestionGroup = ({ fieldName, copy, answer, onChange, onBlur }) => (
  <div>
    <label 
      htmlFor={fieldName}
    >
      {copy}
    </label>
    <Input
      id={fieldName}
      onChange={curryOnChange(onChange, fieldName)}
      value={answer}
      onBlur={onBlur}
    />
  </div>
);

QuestionGroup.propTypes = {
  fieldName: PropTypes.string.isRequired, 
  copy: PropTypes.string.isRequired, 
  answer: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default QuestionGroup;