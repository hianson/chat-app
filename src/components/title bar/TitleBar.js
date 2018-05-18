import React from 'react'
import Controls from './Controls'

const TitleBar = () => {
  return (
    <div style={headerStyle}>
      Just Another Chat-App
      <Controls />
    </div>
  )
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'linear-gradient(to right, #15216d, #9cbddb)',
  marginTop: '-29px',
  marginLeft: '-29px',
  marginRight: '-28px',
  marginBottom: '25px',
  padding: '4px',
  font: '12px Helvetica',
  color: 'white',
}

export default TitleBar
