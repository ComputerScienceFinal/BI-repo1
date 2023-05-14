import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavToF from './components/NavToF';
import Analysis from './Pages/Analysis';
import AnWelcome from './Pages/AnWelcome';
import Login from './Pages/Login';
import Management from './Pages/Management';
import Welcome from './Pages/Welcome';
import FarmDetails from './Pages/FarmDetails';
// import UpdateForm from './Pages/UpdateForm';
// import Flock from './Pages/Flock';
// import About from './Pages/About';


function App() {
  return (
    <div className="App">
    <Router>
      <NavToF>
        <Navbar/>
      </NavToF>

      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/analysis" element={<Analysis/>}/>
      <Route path="/farm-details" element={<FarmDetails/>}/>
      <Route path="/management" element={<Management/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/anwelcome" element={<AnWelcome />}/>
      <Route path="/" element={<Dashboard />}/>
      {/* <Route path="/flock" element={<Flock/>}/> */}
      </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
