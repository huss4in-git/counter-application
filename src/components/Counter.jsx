import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    const [range, setRange] = useState("")
    // hook - useDispatch()
    const dispatch = useDispatch()
    // useSelector - to access state in store
    const count = useSelector((state)=>state.counter.value)
  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>

        <div className='shadow border rounded p-5'>
            <h3 className='text-center text-primary mt-4'>Counter Application</h3>

            <h1 className='text-center mt-4' style={{fontSize:'100px'}}>{count}</h1>

            <div className='mt-5 d-flex'>
                <button className='btn btn-success' onClick={()=>dispatch(increment(Number(range)))}>Increment</button>
                <button className='btn btn-danger ms-3'onClick={()=>dispatch(reset())}>Reset</button>
                <button className='btn btn-warning ms-3'onClick={()=>dispatch(decrement(Number(range)))}>Decrement</button>
            </div>
            <input type="text" placeholder='range' className='form-control mt-4' onChange={(e)=>setRange(e.target.value)} />
        </div>

    </div>
  )
}

export default Counter