import {Typography} from '@mui/material'
import React from 'react'

const fontSize = 16;
export default function ({value}: { value: string }) {
  return (
      <Typography
          style={{fontSize}}
      >
        {value}
      </Typography>
  )
}
