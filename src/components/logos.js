import React, {Component} from 'react'
import getBrand from '../components/getbrand.js'

class Logos extends Component {
	render(){
		let brand = getBrand(this.props.network)
		if (!brand.logos) {
		 return <>
			 <h4 className="display-primary-4 m-t m-lg">Logos</h4>
			 <span className="body-md">Coming Soon</span>
		 </>
	 } else{
			return <>
				<h4 className="display-primary-4 m-t m-lg">Logos</h4>
				<p className="body-md">A set of logos approved for use in AMC digital experiences.</p>
	      <ul className="logos row five-up">
				{brand.logos.map(logo =>
					<li key={logo.src} className="light tile p-y p-md">
						<img className="m-y" src={logo.src} alt={logo.alt} />
						<p className="body-xs p-x tc">{logo.alt} - {logo.type}</p>
					</li>
				)}
	      </ul>
			</>
		}
	}
}

export default Logos
