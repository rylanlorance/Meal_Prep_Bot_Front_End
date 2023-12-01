import {Box, Typography} from '@mui/material';
import React from 'react';

export default function SubHeroItem(props) {
  console.log('props', props);

  return (
    <Box sx={{borderStyle: 'dotted', textAlign: 'center'}}>
      <Box
        height={100}
        width={100}
        component="img"
        src="/assets/process1.png"
      ></Box>
      <Typography variant="h5" color="primary">
        {props.processData.header}
      </Typography>
      <Typography variant="h7">{props.processData.subheader}</Typography>
    </Box>
  );
}
