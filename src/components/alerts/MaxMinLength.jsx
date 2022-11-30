import React from 'react'

const Styles = {
    color: 'red',
}

const MaxMinLength = ({length, number}) => {
  return (
    <span style={Styles}>{length} length is {number}</span>
  );
}

export default MaxMinLength;