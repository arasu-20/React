import React, { memo } from 'react'

function Counter({countValue, onClick}) {
    console.log('This is rendered' ,{countValue})
  return (
    <div>
    <p>{countValue}</p>
    <button onClick={onClick}>Click</button>
    </div>
  )
}
export default memo(Counter)