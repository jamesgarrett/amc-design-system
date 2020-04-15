import React, {Component} from 'react'
import getBrand from '../components/getbrand.js'

class Icons extends Component {
	render(){
		let brand = getBrand(this.props.network)
		if (!brand.icons) {
			return <>
				<h4 className="display-primary-4 m-t m-lg">Icons</h4>
				<span className="body-md">Coming Soon</span>
			</>
		} else {
			return <section>
				<h4 className="display-primary-4 m-t m-lg">Icons</h4>
				<p className="body-md">We use icons in our experience as recognizable ways to quickly communicate familiar concepts and expected behaviors to our users.</p>
				<ul className="icon-set m-y">
 					{brand.icons.map(icon =>
						<li key={icon.slug} className="tile p-y p-md">
							<img className="icon m-y i-xl" src={icon.src} alt={icon.alt} />
							<p className="body-xs">{icon.alt}</p>
						</li>
					)}
				</ul>
			</section>
		}
	}
}

export default Icons
