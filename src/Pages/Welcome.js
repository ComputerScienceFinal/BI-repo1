import React from 'react'
import icon from '../assets/logoOpq.png'
import '../styles/Welcome.css'
import '../fonts/fonts.css'
import {useNavigate} from 'react-router-dom';


function Welcome() {

    let move = useNavigate(); 

  return (
    <div className='welcome'>
        <div className='topBar'>
            <div className='whiteBar'>
                <img src={icon} alt ="" width={32}/>
                <h1>B•I•poultry</h1>
            </div>
            <p>A tool to provide more insight on your poultry farm</p>
        </div>

        <div className='greenbar'></div>

        <h1 className='heading'>Welcome to BI poultry ! </h1>

        <div className='welcomeBox'>
            <div className='textAreaLight'> 
                <p>Data Assist is an excellent business tool to help
                    guide you as you manage and make decisions 
                    on your poultry farm for greater returns 
                </p>
                <p>
                    CLICK on GET STARTED to explore more !
                </p>
            </div>
            <div className='bottomGreen'></div>
        </div>

        <button type='navigate' onClick={() => move("/")}>
            get started
        </button>

    </div>
  )
}

export default Welcome