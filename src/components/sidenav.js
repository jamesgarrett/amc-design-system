import React from 'react'
import { NavLink } from 'react-router-dom';

  class Sidenav extends React.Component{
	render(){
		return(    
			<nav>
		      <ul className="side-nav m-v">
		      	<li className="button m-r">Network</li>
			    <li><NavLink className="button" to='/typography'>AMC</NavLink></li>
			    <li><NavLink className="button" to='/sundance'>Sundance</NavLink></li>
		        <li><NavLink className="button" to='/conversions'>Conversions</NavLink></li>
		      </ul>
		    </nav>
		)
	}
	
}
export default Sidenav;