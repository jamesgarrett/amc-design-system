import React from 'react'
import { Link } from 'react-router-dom';

  class Navigation extends React.Component{
	render(){
		return(
      <nav>
        <ul className="top-nav">
          <li><Link to='/about'>Guidelines</Link></li>
          <li><Link to='/typography'>Typography</Link></li>
          <li><Link to='/resources'>Resources</Link></li>
          <li><Link to='/templates/home/amc'>Templates</Link></li>
        </ul>
      </nav>
		)
	}

}
export default Navigation;
