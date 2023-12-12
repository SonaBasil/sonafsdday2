import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>MY APP</Typography>&nbsp;&nbsp;
                <Button variant='contained' color='error'>Name</Button> &nbsp;&nbsp;
                <Button variant='contained' color="error">LOG In</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar