import React, { PropTypes } from 'react';
import QuestionGroup from './QuestionGroup';

const curryOnBlur = (onBlur, fieldName) => () => onBlur(fieldName);

const createQuestionGroups = ({ fields, onChange, onBlur }) => fields
  .map(({ fieldName, copy, answer }, i) => (
    <QuestionGroup
      key={i}
      fieldName={fieldName}
      copy={copy}
      answer={answer}
      onChange={onChange}
      onBlur={curryOnBlur(onBlur, fieldName)}
    />
  ));

const Prompts = ({ fields, onChange, onBlur }) => (
  <div>
    <h1>
      About Me
    </h1>
    <div>
      {createQuestionGroups({ 
        fields, 
        onChange,
        onBlur,
      })}
    </div>
  </div>
);

Prompts.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    fieldName: PropTypes.string.isRequired,
    copy: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default Prompts;