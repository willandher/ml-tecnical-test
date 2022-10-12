import React from 'react'
import {Typography} from "@mui/material";

export default function Description ({value}: {value:string}){
    return (
        <Typography variant="h3" style={{
            color: "rgba(0,0,0,.55)",
            fontSize: 14,
            fontWeight: 400
        }}>
            {value}
        </Typography>
    )
}