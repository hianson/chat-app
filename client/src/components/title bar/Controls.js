import React from 'react'

const Controls = () => {
  return (
    <div style={controlStyle}>
      <div style={buttonStyle}>_</div>
      <div style={buttonStyle}>M</div>
      <div style={buttonStyle}>x</div>
    </div>
  )
}

const controlStyle = {
  display: 'flex',
  // alignItems: 'center',
  // border: '1px solid orange',
  // float: 'right',
  textAlign: 'center',
}

const buttonStyle = {
  width: '15px',
  height: '15px',
  background: '#d6d6ce',
  marginLeft: '2px',
  border: '1px solid white',
  borderRightColor: '#424242',
  borderBottomColor: '#424242',
  boxShadow: '1px 1px 1px #424546',
  color: 'black',
  fontWeight: 'bold',
}

export default Controls
