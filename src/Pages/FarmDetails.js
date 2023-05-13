import React from 'react'
// import backimg from '../assets/newimbcg.png'
import '../styles/FarmDetails.css'

function FarmDetails() {
  return (
  <div className='aboutpage'>
    <div className='contents'>
      <p id='aboutTt'>About Farm</p>
      <div className='about'>

        <div className='sideA'>
          <div className='header'><p id='text1'>Farm Description</p></div>
          <div id='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, nulla eu sagittis aliquet, leo dolor volutpat mi, in aliquam arcu sem eu magna. Ut lacinia commodo mi, sit amet mollis libero. Vivamus nunc mauris, tempor a faucibus tincidunt, volutpat et leo.</div>
        </div>

        <div className='seperator'> </div>

        <div className=' sideB'>
          <div className='header'><p>Contact Information</p></div>
          <div id='contact'>
            <div className='phone'>
              <p>Phone</p>
              <p id='no'>+ 255 456 789 234</p>
            </div>
            <div className='email'>
              <p>Email</p>
              <p id='em'>demofarm@email.com</p>
            </div>
            <div className='location'>
              <p>Location</p>
              <p id='loc'>Ajax Plot no. 45</p>
            </div>
          </div>
        </div>

      </div> 
    </div>
    </div>
  )
}

export default FarmDetails;
