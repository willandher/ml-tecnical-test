import { Avatar} from '@mui/material'
import React, {CSSProperties} from 'react'

interface AvatarOptions {
    alt: string,
    src: string,
    style?: CSSProperties
}

export default function ({alt,src,style}: AvatarOptions) {
    return (
        <Avatar sx={{ width: 64, height: 64 }} alt={alt} src={src} style={style} />
    )
}
