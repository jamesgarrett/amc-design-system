import React from 'react'
import { NavLink, Route } from 'react-router-dom';


  const Child = ({ match }) => console.log('match', match) || (
      <div>
        <h3>ID: { match.params.network }</h3>
      </div>
  )

  class Sidenav extends React.Component{
	render(){
		return(  
		<div>  
	      <div>
              <ul className="side-nav m-v">
	            <li className="button m-r">Networks</li>
                <li><NavLink className="button" to='/typography'>AMC</NavLink></li>
                <li><NavLink className="button" to='/sundance'>Sundance TV</NavLink></li>
              </ul>
              <Route path='/typography/:network' component={Child} />
          </div>

	    </div>
		)
	}
	
}

export default Sidenav;