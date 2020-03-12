import React from 'react'
import { NavLink } from 'react-router-dom';

class NetworkNav extends React.Component{
	render(){
		return(
		<div className="container-fluid">
	      <div>
              <ul className="side-nav m-y">
	            <li className="button m-r">Networks</li>
                <li><NavLink className="button" to='/templates/home/amc' >AMC</NavLink></li>
                <li><NavLink className="button" to='/templates/home/sundance'>Sundance TV</NavLink></li>
								<li><NavLink className="button" to='/templates/home/ifc'>IFC</NavLink></li>
								<li><NavLink className="button" to='/templates/home/bbca'>BBC America</NavLink></li>
              </ul>
          </div>

	    </div>
		)
	}
}

export default NetworkNav;
