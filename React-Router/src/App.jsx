import { Routes, Route, Link } from 'react-router-dom' 
import './App.css'
import Home from './Home'
import About from './About'


function App() {

  return (
    <div>
        <nav>
          <Link to='/Home'>Home </Link> | <Link to='/About'>ABout</Link>
          <Routes>
              <Route path="/Home" element={<Home/>}></Route>
              <Route path="/About" element={<About/>}></Route>
          </Routes>
        </nav>
    </div>
  )
}

export default App
