import { Button } from '@mui/material'
import React from 'react'


export const ButtonMl =({value}: {value: string})=>{
    return (
        <Button
            style={{
                width: 160,
                backgroundColor: "#3483fa",
                textAlign: "center",
                color: "#fff",
                textTransform: "none"
            }}
            >{value}</Button>
    )
}