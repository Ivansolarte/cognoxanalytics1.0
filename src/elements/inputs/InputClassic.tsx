import React from "react";
import PropTypes from "prop-types";

const InputClassic = ({ type, value, onChange, placeholder,classes }) => {
  console.log(classes,'estas en el inputt');

  
  
  return (
    <input
      type={type}
      className={classes === ""?"input-default":classes}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

InputClassic.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  classes: PropTypes.string,
};

InputClassic.defaultProps = {
  classes: "input-default",
}

export default InputClassic;
