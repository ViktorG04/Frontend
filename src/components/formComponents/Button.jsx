import React from 'react'

const Button = ({type, onClick, name}) => {
  return (
    <button type={`${type}`} onClick={onClick}>{name}</button>
  )
}

export default Button;