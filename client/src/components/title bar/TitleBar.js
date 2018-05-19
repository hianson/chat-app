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
  margin: '-34px -33px 30px -34px',
  padding: '4px',
  font: '12px Helvetica',
  color: 'white',
  cursor: 'default',
}

export default TitleBar
