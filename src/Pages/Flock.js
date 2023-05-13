
import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Flock.css';

function Flock() {

  return (
      <body>
        <p className = "heading">Flock Numbers</p>
          <div className="box-container">
            <div className="box">
              <p className="title">CHICKS</p>
              <div className="figure">120</div>
              <ul>
                <li><span className="healthy"></span>Healthy <p>109</p></li>
                <li><span className="unhealthy"></span>Unhealthy <p>11</p></li>
              </ul>
              <div className="poll-bar">
                <div className="poll-bar-fill" style={{ width: '90%' }}></div>
              </div>
              <div className="last-updated">Last updated: 05/06/2023</div>
            </div>
            <div className="box">
              <p className="title">HENS</p>
              <div className="figure">205</div>
              <ul>
                <li><span className="healthy"></span>Healthy&nbsp;&nbsp; <p>156</p></li>
                <li><span className="unhealthy"></span>Unhealthy<p>49</p></li>
              </ul>
              <div className="poll-bar">
                <div className="poll-bar-fill" style={{ width: "76%" }}></div>
              </div>
              <div className="last-updated">Last updated: 05/06/2023</div>
            </div>
            <div className="box">
              <p className="title">BROILERS</p>
              <div className="figure">54</div>
              <ul>
                <li><span className="healthy"></span>Healthy&nbsp;&nbsp; <p>50</p></li>
                <li><span className="unhealthy"></span>Unhealthy <p>4</p></li>
              </ul>
              <div className="poll-bar">
                <div className="poll-bar-fill" style={{ width: '92%' }}></div>
              </div>
              <div className="last-updated">Last updated: 05/06/2023</div>
            </div>
            <div className="box">
              <p className="title">LAYERS</p>
              <div className="figure">98</div>
              <ul>
                <li><span className="healthy"></span>Healthy&nbsp;&nbsp; <p>90</p></li>
                <li><span className="unhealthy"></span>Unhealthy <p>8</p></li>
              </ul>
              <div className="poll-bar">
                <div className="poll-bar-fill" style={{ width: '90%' }}></div>
              </div>
              <div className="last-updated">Last updated: 05/06/2023</div>
            </div>
          
            <div className=" box tip-box">
              <div className="title-tip ">
                <p>TIP</p>
              </div>
              <div className="tip-text">
                <p>For better productivity and follow up, please endeavour to update farm information</p>
              </div>
            </div>
          </div>

        <p id= 'header2'>Total Population</p>
          <div className="box2">
            <div className="left">
              <figure>477 </figure>&nbsp;&nbsp;<p>birds</p>
            </div>
            <div className="divider"></div>
            <div className="right">
            <figure id='rtext'>84.90%  </figure>&nbsp;&nbsp;<p>healthy</p>
            </div>
          </div>

        <p className = "heading">Update Tracker</p>
          <div className="box3">
            <div className="loft">
              <p>Last date to update: 22-08-2023</p>
              <p>Update Frequency: Normal</p>
            </div>
            <div className="roght">
              <Link to='/updateform'><button className="button">Click to Update</button></Link>
            </div>
          </div>
      </body>
    
  );
}

export default Flock;