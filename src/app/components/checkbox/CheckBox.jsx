import React from 'react'
import Checkbox from '@mui/material/Checkbox';
const CheckBox = ({checked}) => {
  return (
    <div>
      <Checkbox checked={checked}/>
    </div>
  )
}

export default CheckBox