import React , { useState } from 'react'
// // import backimg from '../assets/istockphoto-1176784969-170667a.jpg';
import "../styles/UpdateForm.css";

function UpdateForm() {
  const [numberOfChicks, setNumberOfChicks] = useState('');
  const [numberOfHens, setNumberOfHens] = useState('');
  const [numberOfCocks, setNumberOfCocks] = useState('');
  const [numberOfLayers, setNumberOfLayers] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Number of Chicks:', numberOfChicks);
    console.log('Number of Hens:', numberOfHens);
    console.log('Number of Cocks:', numberOfCocks);
    console.log('Number of Layers:', numberOfLayers);
  }

  return (
  <body>
    <div className='contain'>
      <div className="left">
        <p>Data Update Room</p>
        <div className="flock-section">
          <p id='flocki'>Flock&nbsp;&nbsp;Section</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space"><label htmlFor="numberOfChicks">Number of Chicks:</label>
            <input 
              type="number" 
              id="numberOfChicks" 
              name="numberOfChicks" 
              value={numberOfChicks} 
              onChange={(e) => setNumberOfChicks(e.target.value)}
              
            />
            </div>          
            
            <br />
            
            <div className="space"><label htmlFor="numberOfHens">Number of Hens:</label>
            <input 
              type="number" 
              id="numberOfHens" 
              name="numberOfHens" 
              value={numberOfHens} 
              onChange={(e) => setNumberOfHens(e.target.value)} 
              
            />
            </div>

            <br />
            
            <div className="space"><label htmlFor="numberOfCocks">Number of Broilers:</label>
            <input 
              type="number" 
              id="numberOfCocks" 
              name="numberOfCocks" 
              value={numberOfCocks} 
              onChange={(e) => setNumberOfCocks(e.target.value)} 
            />
            </div>

            <br/>
            
            <div className="space"><label htmlFor="numberOfLayers">Number of Layers:</label>
            <input 
              type="number" 
              id="numberOfLayers" 
              name="numberOfLayers" 
              value={numberOfLayers} 
              onChange={(e) => setNumberOfLayers(e.target.value)} 
              
            />
            </div>
            
            <br />
            
          <button type="submit">save</button>
        </form>
      </div>
      <div className=" right">
           <div className="title-tip ">
              <p>TIP</p>
            </div>
            <div className="tip-text">
              <p>Always ensure to save before leaving this page. This ensures that your data gets updated</p>
            </div>
      </div>
  
    </div>
   
  </body>

  );
}

export default UpdateForm;
