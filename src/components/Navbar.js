import React, { Component } from 'react';
import icon from '../assets/logoOpq.png';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { IconButton } from '@mui/material';

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div id='navbar-wrapper'>
        <div id='navbar-top-bar'></div>
        <div id='navbar'>
          <a href='/'> <img src={icon} width={35} alt='' /></a>
          <div>
            <ul id="navlinks" className={this.state.clicked ? 'active' : 'inactive'}>
            <li><Link className='active' to='/'>Dashboard</Link></li>
            <li><Link to='/management'>Management</Link></li>
            <li><Link to='/flock'>Flock</Link></li>
            <li><Link to='/analysis'>Analysis</Link></li>
            <li><Link to='/farm-details'>Farm Details</Link></li>
            </ul>
          </div>

          <div id='smallerScreen'>
            <IconButton onClick={this.handleClick}>
              {this.state.clicked ? <CloseIcon className='closeI' /> : <ReorderIcon className='openI' />}
            </IconButton>
          </div>

        </div>
        <div id='navbar-bottom-bar'></div>
      </div>
    );
  }
}

export default Navbar;
