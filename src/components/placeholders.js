import React, {Component} from 'react'
import getBrand from '../components/getbrand.js'

class Logos extends Component {
	render(){
		let brand = getBrand(this.props.network)
		if (!brand.placeholders){
			return <>
				<h4 className="display-primary-4 m-t m-lg">Placeholders</h4>
				<span className="body-md">Coming Soon</span>
			</>
		} else {
			return <section>
				<h4 className="display-primary-4 m-t m-lg">Image Placeholders</h4>
				<p className="body-md">We use a set of images for each network as placeholders while image requests are fulfilled. Please use the set below as the placeholder images.</p>
				<ul class="row five-up">
					{brand.placeholders.map(placeholder =>
						<li key={placeholder.slug} className="card p-y p-md">
							<img className="thumbnail" src={placeholder.src} alt={placeholder.alt} />
							<p className="body-xs">{placeholder.name}</p>
						</li>
					)}
				</ul>
			</section>
		}
	}
}

export default Logos
