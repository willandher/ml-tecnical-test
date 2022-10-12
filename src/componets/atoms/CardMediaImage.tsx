import React from 'react'
import {Box, CardMedia} from "@mui/material";

interface CardMediaImage{
    image: string,
    alt: string
}
export function CarMediaImage ({image, alt}: CardMediaImage) {
    return (
        <Box sx={{
            borderRadius: 1,
            border: "1px solid rgba(0,0,0,.1)",
            margin: 1,
            padding: 1
        }}>
            <CardMedia
                style={{
                    width:72,
                    height:72,
                }}
                component="img"
                image={image}
                alt={alt}
            />
        </Box>
       )
}