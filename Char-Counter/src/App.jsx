import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("");
  const limit = 100;

  return (
    <div>
      <h1>Character Counter </h1>
      <textarea value={text}
      onChange={(e) => setText(e.target.value)}
      maxLength={limit}
      placeholder='Type Something....'></textarea>

      <p>Characters Remaining: {limit - text.length}</p>
    </div>
  )
}

export default App
