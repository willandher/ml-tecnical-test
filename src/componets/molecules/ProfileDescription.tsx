import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '../atoms/Avatar'
import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import {Grid} from '@mui/material';

export function ProfileDescription() {
  return (
      <Box>
        <Grid style={{
          height: 112,
          width: 714,
          background: '#FFFFFF'
        }} container spacing={1}>
          <Grid item xs={2}>
            <Avatar alt='' src='' style={{margin: 'auto', marginTop: 18}}/>
          </Grid>
          <Grid item xs={6} style={{marginTop: 18}}>
            <Title value='Willandher Goyo'/>
            <SubTitle value='Nivel Oro'/>
          </Grid>
          <Grid item xs={4}/>
        </Grid>
      </Box>
  )
}
