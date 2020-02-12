import React from 'react'
import { NavLink } from 'react-router-dom';

  class Sidenav extends React.Component{
	render(){
		return(    
			<nav>
		      <ul className="side-nav">
			    <li><NavLink to='/typography'>Typography</NavLink></li>
		        <li><NavLink to='/conversions'>Conversions</NavLink></li>
		      </ul>
		    </nav>
		)
	}
	
}
export default Sidenav;