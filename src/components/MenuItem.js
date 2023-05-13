import React from 'react'
// import backimg from '../assets/istockphoto-1176784969-170667a.jpg';

function MenuItem({image, name, price}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage: `url(${image})`}}></div>
        <h1> {name} </h1>
        <p>Shs {price}</p>
    </div>
  )
}

export default MenuItem;