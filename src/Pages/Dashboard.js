import React from 'react'
import { Link } from 'react-router-dom'
// import { Navigate } from 'react-router-dom';
import "../styles/Dashboard.css"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
function Dashboard({authorized}) {
  // if (!authorized) {
  //   return <Navigate to='/login'/>;
  // }

  return( 
    <div className='home' /*style={{backgroundColor: "#EEF3F1"}}*/>
      <div className='containerOne' >
        <div className='leftCont1'>
        </div>
        <div className='rightCont1'></div>
      </div>

      <div className='containerTwo'>
        <div className='leftCont2'></div>
        <div className='rightCont2'>
          <p id='currentRevenue'>Current Revenue</p>

          <div className='moneyFigure'>
            <p className='shs'>Shs</p>
            <p id='money'>7.03 M</p>
          </div>

          <div className='revenuePane'>
            <div className='upperText'>
              <p id='riseText'>Expected Rise</p>
              <div className='dropDown'> </div>
            </div>
            <div className='middlePart'>
              <ArrowCircleUpIcon id='icon'/>
              <div className='shs'>Shs</div>
              <div className='paneFigure'>1.1 M</div>
            </div>
            <div className='lowerText'>
              <p className='expText'>15.6 %</p>
              <p className='expText'>raise</p>
            </div>
          </div>
          
        </div>
      </div>

      
      <div className='headerContainer'>
        <p>check out the Login page</p>
        <Link to = "/login">
          <button> LOGIN</button>
        </Link>
        <p>check out the welcome page</p>
        <Link to = "/welcome">
          <button> WELCOME </button>
        </Link>
        <p>welcome to Analysis </p>
        <Link to = "/analysis_welcome">
          <button> CONTINUE </button>
        </Link>
    </div>
  </div>
  );
}

export default Dashboard