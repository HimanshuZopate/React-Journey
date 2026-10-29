import { useState  } from "react";
import "./App.css"
  function App(){
    const [darkMode, setDarkmode] = useState(false);
    return(
      <div className={darkMode ? "app dark" : "app light"}>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

        <p>Welcome to my React application</p>

        <button onClick={() => setDarkmode(!darkMode)}>
          Switch to {darkMode ? "Light" :"Dark"} Mode
        </button>

      </div>
    )
  }


export default App;