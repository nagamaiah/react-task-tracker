import React from 'react'
import PropTypes from 'prop-types';

const Button = ({color, text, btnClickEvent}) => {

  return (
    <button onClick={btnClickEvent} style={{backgroundColor: color}} className="btn">{text}</button>
  )

}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Default'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    btnClickEvent: PropTypes.func.isRequired
}

export default Button