import React from 'react'
import { increment,decrement } from '../redux/actions/CounterActions'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Count : {count}</h1>
    <button onClick={() => dispatch(increment())}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter