import { useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>Password Toggle</h2>
      <input type={showPassword ? "text" : "password"}
      value={password} 
      onChange={(e) => setPassword(e.target.value)}
      placeholder='Enter password'/>

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  )
}

export default App
