import React, { useState } from 'react'

const StateComp = () => {
    const [count, setCount] = useState(0);

    const handleCount = ()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>React State Counter Example</h1>
        <p>You have clicked the button {count} times</p>
        <button onClick={handleCount}> Click Me </button>
        
    </div>
  )
}

export default StateComp