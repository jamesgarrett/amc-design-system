import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/logos/amc-light.svg';

  class Navigation extends React.Component{
	render(){
		return(
      <div className='header p-x'>
        <div className='lockup'>
            <Link to='/'><img src={Logo} className='logo' alt='website logo' /></Link>
          <h5 className='headline-5--strong hidden-sm'>Design System</h5>
        </div>
        <nav>
          <ul className="top-nav">
            <li><NavLink to='/about'>Guidelines</NavLink></li>
            <li><NavLink to='/typography'>Typography</NavLink></li>
            <li><NavLink to='/resources'>Resources</NavLink></li>
            <li><NavLink to='/templates'>Templates</NavLink></li>
          </ul>
        </nav>
      </div>
		)
	}

}
export default Navigation;
