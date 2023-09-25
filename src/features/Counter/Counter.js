// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { increment ,decrement} from './counterSlice'

// function Counter() {
//     const count=useSelector((state)=>state.counter.count)
//     const dispatch=useDispatch()
//   return (
//     <div>
//         <p>{count}</p>
//         <>
//         <button onClick={()=>dispatch(increment())}>+</button>
//         <button onClick={()=>dispatch(decrement())}>-</button>
//         </>
//     </div>
//   )
// }

// export default Counter


import React from 'react'
import { increment,decrement } from './counterSlice'
import { useSelector,useDispatch } from 'react-redux'

export default function Counter() {
  const count=useSelector((state)=>state.counter.count)
  const dispatch=useDispatch()
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
    </div>
  )
}

