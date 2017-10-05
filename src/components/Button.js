import React from 'react';
import PropTypes from 'prop-types'

const Button = (props) => (
  <button>
    { props.text }
  </button>
)

Button.PropTypes = {
  text: PropTypes.node.isRequired
}

export {
  Button
}
