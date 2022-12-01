import React from 'react'

const style = {
    color: 'red',
}

const Notification = ({error}) => {
  return (
    <span style={style}>{error}</span>
  )
}

export default Notification;