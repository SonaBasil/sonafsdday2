import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
    var [name,setName] = useState()

    const changeHname = () =>{
        setName("Home")
    
    }

    const changeCname =() =>{
        setName("Contact")
    }

    const changeGname =() =>{
        setName("Gallery")
    }
    useEffect(()=>{
        changeHname()
    },[])

    
  return (
    <div>
        <Typography>Welcome to {name}</Typography>
       <Button variant='contained' onClick={changeHname}>HOME</Button><br></br>
       <Button variant='contained' onClick={changeCname}>CONTACT</Button><br></br>
       <Button variant='contained' onClick={changeGname}> GALLERY</Button><br></br>
    </div>
  )
}

export default UseE