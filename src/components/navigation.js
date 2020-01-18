import React from 'react'
import { NavLink } from 'react-router-dom';

  class Navigation extends React.Component{
	render(){
		return(    
			<nav>
		      <ul className="top-nav">
		        <li><NavLink to='/home'>Home</NavLink></li>
		        <li><NavLink to='/about'>Guidelines</NavLink></li>
		        <li><NavLink to='/typography'>Typography</NavLink></li>
		        <li><NavLink to='/resources'>Resources</NavLink></li>
		      </ul>
		    </nav>
		)
	}
	
}
export default Navigation;