import React from 'react'
import PropTypes from 'prop-types'

const InputPassword = ({type,placeholder,onChange,value}) => {
    return (
        <input 

            type={type}
            className="input-default"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    )
}

InputPassword.propTypes = {
    type: PropTypes.string
}

InputPassword.defaultProps = {
    value:"",
}

export default InputPassword
