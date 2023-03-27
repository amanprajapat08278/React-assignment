import React from 'react'

function Num({arr}) {
  return (
    <div>
        {
            arr.map((x)=>{
                return(
                    <h2>{x}</h2>
                )
            })
        }

      
    </div>
  )
}

export default Num
