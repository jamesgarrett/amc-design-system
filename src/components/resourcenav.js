import React from 'react'
import { NavLink } from 'react-router-dom';

class ResourceNav extends React.Component{
	render(){
		return(
		<div className="container-fixed">
	      <div>
					<ul className="side-nav p-x m-y">
						<li className="nav-title m-r"><span className="button-md">Networks</span></li>
						<li><NavLink className="button-md" to='/resources/amc' >AMC</NavLink></li>
						<li><NavLink className="button-md" to='/resources/sundance'>Sundance TV</NavLink></li>
						<li><NavLink className="button-md" to='/resources/ifc'>IFC</NavLink></li>
						<li><NavLink className="button-md" to='/resources/bbca'>BBC America</NavLink></li>
						<li><NavLink className="button-md" to='/resources/wetv'>WEtv</NavLink></li>
					</ul>
          </div>

	    </div>
		)
	}

}

export default ResourceNav;
