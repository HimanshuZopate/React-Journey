import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";

function App(){
  return(
    <BrowserRouter>
        <h1>My Tab Application</h1>

        <nav className="tabs">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/contact" >Contact</NavLink>
        </nav>

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default App;