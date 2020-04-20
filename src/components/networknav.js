import React from 'react'
import { NavLink } from 'react-router-dom';

class NetworkNav extends React.Component{

	render(){
		return(
		<div className="container-fixed">
	      <div>
              <ul className="side-nav p-x m-y">
		            <li className="nav-title m-r"><span className="button-md">Networks</span></li>
                <li><NavLink className="button-md" to='/templates/home/amc' >AMC</NavLink></li>
                <li><NavLink className="button-md" to='/templates/home/sundance'>Sundance TV</NavLink></li>
								<li><NavLink className="button-md" to='/templates/home/ifc'>IFC</NavLink></li>
								<li><NavLink className="button-md" to='/templates/home/bbca'>BBC America</NavLink></li>
								<li><NavLink className="button-md" to='/templates/home/wetv'>WEtv</NavLink></li>
              </ul>
          </div>

	    </div>
		)
	}
}

export default NetworkNav;
