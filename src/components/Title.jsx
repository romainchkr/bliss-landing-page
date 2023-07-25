import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign, color }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    color={color}
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
   }}
    dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default Title