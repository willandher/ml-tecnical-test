import { Avatar} from '@mui/material'
import React from 'react'

interface AvatarOptions {
    alt: string,
    src: string
}

export default function ({alt,src}: AvatarOptions) {
    return (
        <Avatar sx={{ width: 64, height: 64 }} alt={alt} src={src} />
    )
}