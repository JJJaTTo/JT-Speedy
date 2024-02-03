import React, { useState } from "react";
import './Speedy.css'

function Speedy(){

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const mw =() => {
       const frameWidth = width;
       const frameHeight = height;
        //const result = `${frameWidth - 12} x ${frameHeight-40}`
        // alert(result)

        const window = {
          frameWidth: `Track:${frameWidth}mm (2pcs)\n`,
          frameHeight: `Side-Jam: ${frameHeight - 12}mm (2pcs)\n`,
          panelTop: `Top ${frameWidth / 2 - 82}mm (4pcs)\n`,
          interlock: `Inter-lock ${frameHeight - 40}mm (2pcs)\n`,
          lockstyle: `lock-style ${frameHeight - 40}mm (2pcs)\n`,
          glass: `glass: ${frameWidth / 2 - 82 + 18}mm  X ${frameHeight - 120}mm\n`,
          accesory:
            "key 1set, roller 1set, coupling-screw 8pcs, jam-screw 10pcs",
        };
        
      const frameW = window.frameWidth;
      const frameH = window.frameHeight;
      const Top = window.panelTop;
      const interLock = window.interlock;
      const lockStyle = window.lockstyle;
      const accesories = window.accesory;
      const glass = window.glass;
    
      const resultArray = [
        frameW,
        frameH,
        Top,
        interLock,
        lockStyle,
        glass,
        accesories,
      ];
    
    }
  

    return (
      <>
      <div className="container">
        <div className="header">
          <img src="src\assets\JTLITE.png" alt="JT logo" />
          <h2>JT Speedy Fabricator</h2>
        </div>
  
        <form  action="#" className="form-inputs">
          
            <input 
            className="input"
            type="number" 
            placeholder="Enter width" 
            value={width}
            onChange={e=>setWidth(e.target.value)}
            
            />
            
            <input 
            className="input"
            type="number" 
            placeholder="Enter height" 
            value={height}
            onChange={e=>setHeight(e.target.value)}
            
            />
            
            <button className="fabricate-btn"
            onClick={mw}
            >Fabricate</button>
        </form>
  
        <div className="materials">
          <ul>
            <div>
              <h2>Materials</h2>
              <hr />
              <ul>
             
                
              </ul>
              </div> 
          </ul>
        </div>
  
        <footer className="foot">
          <h4>Contact:</h4>
          <hr />
          <p>
            Mile Seven, <br />
            Zaria Road, Jos <br />
          j.j.jatto@gmail.com <br />
          +234 81-27-967-257
            </p>
  
  
        </footer>
      </div>
      </>
    )
  
}
  export default Speedy;