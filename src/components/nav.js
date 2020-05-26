import React from 'react'
import {FaStore, FaBeer} from 'react-icons/fa'
import './nav.css'


function Nav(){

    return(
   
      <div className="container">
          <span className="icon">
            <FaStore/>
          </span>
          <FaStore/>
          <FaBeer></FaBeer>
      </div>
       
   );
}

export default Nav;