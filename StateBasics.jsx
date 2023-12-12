import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var name ="Sona"
    var [fname,setFname]= useState("Basil")
    var [val,setVal] =useState("Val")

const changeName=()=>{
  console.log["clicked"]
  setFname(val)
  setVal("")
}


const Inputhandler = (e) =>{
  console.log(e.target.value)
  setVal(e.target.value)

}
  

return (
    <div>
      <Typography>My Name is {fname} </Typography><br></br>
      <TextField variant='outlined' label='Enter Name' onChange={Inputhandler} value={val}></TextField><br></br>
      <Button variant="contained" onClick={changeName}>CHANGE</Button>
    </div>

  )
}

export default StateBasics