import {Typography} from '@mui/material'
import React, {CSSProperties} from 'react'

const fontSize = 16;
interface SubTitleOptions {
    value: string
    style?: CSSProperties
}

export default function  SubTitle ({value, style }:SubTitleOptions) {
    return (
      <Typography
          style={{fontSize, ...style}}>
        {value}
      </Typography>
  )
}
