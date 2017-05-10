import React, { PropTypes } from 'react';

const curryOnChange = (onChange) => (event) => onChange(event.target.value);

const Input = ({ onChange, ...props }) => (
  <input 
    {...props}
    onChange={curryOnChange(onChange)}
  />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Input;