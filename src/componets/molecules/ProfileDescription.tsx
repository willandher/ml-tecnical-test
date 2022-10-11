import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '../atoms/Avatar'
import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import { Grid } from '@mui/material';

export function ProfileDescription(){
    return (
        <Box>
            <Grid style={{
                background: "red",
                height: "200px"
            }} container spacing={1}>
                <Grid style={{
                    background: "blue"
                }} item xs={4}>
                        <Avatar alt='' src='' />
                </Grid>
                <Grid item xs={8}>
                    <Title value='Willandher'/>
                    <SubTitle value='Nivel Oro'/>
                </Grid>
            </Grid>
        </Box>
    )
}