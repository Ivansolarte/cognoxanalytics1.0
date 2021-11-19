import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const LinkClassic = ({ text, classes,router }) => {
  return (
    <p
      className={classes}
    >
      <Link to={router}>{text}</Link>
      
    </p>
  )
}

LinkClassic.propTypes = {
  text: PropTypes.string
}

export default LinkClassic
