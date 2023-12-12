import React, { useState } from 'react'

const Mapping = () => {
    var [names,setNames]= useState(["Sona","Theressa","Basil"])
  return (
    <div>
        <ol>
            {names.map((value,index)=>{
                return(
                    <li>{value}</li>
                )
           })}
        </ol>
    </div>
  )
}

export default Mapping