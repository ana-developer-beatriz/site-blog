import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {cor, disabled, text} = props; //definição das props
  const estiloDoBotao = {
    backgroundColor: cor,
    color: 'white',
    borderRadius: '5px',
    width:'180px',
	  height:'52px',

  };

  return (
    <button onClick={props.onClick} disabled={disabled} style={estiloDoBotao}>
   {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
export default Button;