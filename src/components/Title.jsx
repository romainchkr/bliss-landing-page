import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign, color, fontSize = '2.125rem' }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    color={color}
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
        fontSize: {xs: fontSize, md: '2.125rem'}
    }}
    dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default Title