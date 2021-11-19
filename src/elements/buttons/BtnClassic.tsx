import React from 'react'
import PropTypes from 'prop-types'


const BtnClassic = ({ text,click,classes}) => {
  return (
    <>
      <button
        onClick={click}
        className={'btn '+classes}
      >{text}</button>
    </>
  )
}

BtnClassic.propTypes = {
  click: PropTypes.func,
  text: PropTypes.string,
  classes: PropTypes.string
}

BtnClassic.defaultProps = {
  classes:"btn ",
  text:"button",
}

export default BtnClassic
