import React, { useRef } from 'react'

export default function Hooks() {
    const count = useRef(0);
    function handleClick(){
        count.current++;
        console.log(count.current);
    }

  return (
    <div>
      <h1>useRef, useCallback and useMemo</h1>
      <button onClick={handleClick}>Count</button>
    </div>
  )
}
