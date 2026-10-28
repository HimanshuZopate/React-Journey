import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const title = "React Counter Application";

  function handleIncrement() {
    setCount(count+1);
  }
  function handleDecrement(){
    if(count > 0){
      setCount(count - 1);
    }
  }

  function handleReset(){
    setCount(0);
  }

  return (
   <div>
    <h1>{title}</h1>
    <p>Current Count :{count}</p>
    <button onClick={handleIncrement}>Increment</button>  
    <button onClick={handleDecrement}>Decrement</button>  
    <button onClick={handleReset}>Reset</button>  
   </div>
  )
}

export default App
