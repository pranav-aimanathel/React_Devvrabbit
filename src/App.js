
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Navibar from './Components/Devrabbit/Navbar'
import About from './Pages/Home/About Us/About';

function App() {
  return (
    <Router>
      <div>
        <Navibar />
        <div>
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='about' element= {<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
