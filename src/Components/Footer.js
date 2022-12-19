
import React from 'react';
import {Box ,Stack , Typography} from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt ="80px" bgcolor="#fff3f4">
<Stack gap="40px" alignItems="center" px="40px" pt="24px">
<img src={Logo} alt="logo" width="200px" height='40px' />

<Typography fontSize="25px" color="#000" mb={2} fontWeight='bold' marginLeft="35px">
 Get a jump on your day.
 
</Typography>
</Stack>

    </Box>
  )
}

export default Footer