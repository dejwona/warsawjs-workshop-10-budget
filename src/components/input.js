import React from 'react';
import PropTypes from 'prop-types';

const Input = ({type = 'text', placeholder, value, onChange, ...others }) => {     
    return <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...others}
    />
}

Input.propTypes = {
	type: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Input;