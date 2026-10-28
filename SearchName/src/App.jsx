import { useState } from "react";
import "./App.css"

function App(){
  const [search, setSearch] = useState("");

  const names = [
    "Himansu", "Abhishek", "Akib", "Shreyash", "Akshay",
  ];
  const filteredNames = names.filter((name) => 
    name.toLowerCase().includes(search.toLowerCase())
);
return (
  <div>
    <h2>Search Names</h2>

    <input type=" text" 
    placeholder="Search a name...."
    value={search}
    onChange={(e) => setSearch(e.target.value)}/>

    <ul>
      {filteredNames.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>

    {filteredNames.length === 0 && <p>No names found.</p>}
  </div>
)
}

export default App;