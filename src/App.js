import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Flock from "./Pages/Flock";
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';
import AnWelcome from './Pages/AnWelcome';
import FarmDetails from './Pages/FarmDetails';
import Management from './Pages/Management';
import NavToF from './components/NavToF';
import Analysis from './Pages/Analysis';
import UpdateForm from './Pages/UpdateForm';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <Router>

        <NavToF>
          <Navbar/>
        </NavToF>

        <Routes>
          <Route exact path = "/" element = {<Dashboard/>} />
          {/* <Route path = "/" element = {() => <Home authorized={false}/>} /> */}
          <Route exact path = "/flock" element = {<Flock/>} />
          <Route exact path = "/farm-details" element = {<FarmDetails/>} />
          <Route exact path = "/updateform" element = {<UpdateForm/>} />
          <Route exact path = "/login" element = {<Login/>}/>
          <Route exact path = "/analysis" element = {<Analysis/>}/>
          <Route exact path = "/welcome" element = {<Welcome/>} />
          <Route exact path = "/analysis_welcome" element = {<AnWelcome/>} />
          <Route exact path = "/management" element = {<Management/>} />
          <Route exact path = "/analysis_welcome" element = {<AnWelcome/>} />
        </Routes>

        <Footer/>

      </Router>
    </div>
  );
}

export default App;
