import React from 'react'
import { Link } from 'react-router-dom';
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
            <li><Link to='/about'>Guidelines</Link></li>
            <li><Link to='/typography'>Typography</Link></li>
            <li><Link to='/resources'>Resources</Link></li>
            <li><Link to='/templates/home/amc'>Templates</Link></li>
          </ul>
        </nav>
      </div>
		)
	}

}
export default Navigation;
