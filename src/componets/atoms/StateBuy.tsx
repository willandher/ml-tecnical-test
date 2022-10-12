import {Typography} from '@mui/material'
import React, {CSSProperties} from 'react'

const fontSize = 14;
export default function  StateBuy ({value}: { value: string }) {
  return (
      <Typography
          style={{fontSize,
          color: '#00a650'
          }
      }>
        {value}
      </Typography>
  )
}
