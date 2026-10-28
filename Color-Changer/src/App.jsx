import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <h2>Color Changer</h2>
      <div style={{backgroundColor:color,
        width:"200px",
        height:"150px",
        border:"1px solid black",
        marginBottom:"10px",

      }}>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("blue")}>Blue</button>

      </div>
    </div>
  )
}

export default App
