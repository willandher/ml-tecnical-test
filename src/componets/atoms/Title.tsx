import React from 'react';
import Typography from '@mui/material/Typography'

export default function Title({value}: { value: string }) {
  return (
      <Typography
          style={{fontSize: 24}}>
        {value}
      </Typography>
  )
}
