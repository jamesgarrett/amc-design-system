import React from 'react'
import { NavLink } from 'react-router-dom';

class Sidenav extends React.Component{
	render(){
		return(
		<div className="container-fixed">
	      <div>
					<ul className="side-nav p-x m-y">
						<li className="nav-title"><span className="button-md">Networks</span></li>
						<li><NavLink className="button-md" to='/typography/amc' >AMC</NavLink></li>
						<li><NavLink className="button-md" to='/typography/sundance'>Sundance TV</NavLink></li>
						<li><NavLink className="button-md" to='/typography/ifc'>IFC</NavLink></li>
						<li><NavLink className="button-md" to='/typography/bbca'>BBC America</NavLink></li>
					</ul>
          </div>

	    </div>
		)
	}

}

export default Sidenav;
