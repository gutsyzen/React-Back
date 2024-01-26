import React,  {useState} from 'react'
const Counter=()=>{
    const [count,setCount]=useState(0);
    const incrementCount =()=>{
        setCount(count+1);
    }
    const decrementCount=()=>{
        setCount(count-1);
    }
    const resetCount=()=>{
        setCount(0);
    }
}
  return (
  <div>
    <div className="container">
        <div>
            <h1>
                Counter:{count}
            </h1>
            <div className="button=container">
                    <button onClick={incrementCount}>Increment</button>
                    <button onClick={decrementCount}>Decrement</button>
                    <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    </div>
    </div>
  )
  export default Counter
  