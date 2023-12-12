import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

function SignUp() {
  return (
    <div>
      <Typography variant='h4'>SignUp</Typography> 
      <TextField variant='outlined' label='name'></TextField><br></br><br></br>
      <TextField variant='outlined' label='email'></TextField><br></br><br></br>
      <TextField variant='outlined' label='password'></TextField><br></br><br></br>
      <Button>SUBMIT</Button>

       
       </div>
  )
}

export default SignUp