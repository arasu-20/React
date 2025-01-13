import React, { useCallback, useState } from 'react'
import Counter from './Counter'

export default function UseCallBack() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const incrementOne = useCallback(()=>setCountOne(prev=>prev+1),[])
    const incrementTwo = useCallback(()=>setCountTwo(prev=>prev+1),[])
return (
    <div>
    <h2>useCallback</h2>
    <Counter countValue = {countOne} onClick={incrementOne}/>
    <Counter countValue = {countTwo} onClick={incrementTwo}/>
    </div>
)
}
