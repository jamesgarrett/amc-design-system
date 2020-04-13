import React from 'react';
import { NavLink } from 'react-router-dom';


const FourOhFour = ({ match, location }) => {
  console.log(match);

	const { params: { network } } = match;
	var net = network;

	return (
	<div className={net}>
	  <body className="m-x">

			<header className="p-y container-fixed">
				<h1 className="headline-primary-1 m-y">Templates</h1>
				<h2 className="body-lg m-y">Template: 404 Page</h2>
			</header>

      <div className="container-fixed">
	      <div>
              <ul className="side-nav p-x m-y">
		            <li className="nav-title m-r"><span className="button-md">Networks</span></li>
                <li><NavLink className="button-md" to='/templates/404/amc' >AMC</NavLink></li>
                <li><NavLink className="button-md" to='/templates/404/sundance'>Sundance TV</NavLink></li>
								<li><NavLink className="button-md" to='/templates/404/ifc'>IFC</NavLink></li>
								<li><NavLink className="button-md" to='/templates/404/bbca'>BBC America</NavLink></li>
              </ul>
          </div>
	    </div>

      <header className="p-y container-fixed">
        <h1 className="display-primary-6 m-y">Uh Oh, That's a 404.</h1>
        <h2 className="body-lg m-y p-b">The page you requested could not be found. <br></br>Click the link below to return to the homepage.</h2>
        <button className="button-md p-x p-y">Return to Home</button>
      </header>

	  </body>
	</div>
	);
};

export default FourOhFour;
