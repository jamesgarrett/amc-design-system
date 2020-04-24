import React, {Component, Link} from 'react'
import getBrand from '../functions/getBrand.js'

class Downloads extends Component {
	render(){
		let brand = getBrand(this.props.network)
		if (!brand.downloads) {
		 return <>
			 <h4 className="display-primary-4 m-t m-lg">Downloads</h4>
			 <span className="body-md">Coming Soon</span>
		 </>
	 } else{
			return <>
				<h4 className="display-primary-4 m-t m-lg">Downloads</h4>
				<p className="body-md">Finally, the good stuff.</p>
	      <ul className="downloads row five-up">
				{brand.downloads.map(download =>
					<span className="tile p-a">
						<h6 className="display-primary-2 p-b p-sm">{download.name}</h6>
						<span className="body-sm">{download.desc}</span>
						<a href={download.src} className="button-md p-y" target="_blank" rel="noopener noreferrer" download>
							<img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all icons"/>
							Download
						</a>
					</span>
				)}
	      </ul>
			</>
		}
	}
}

export default Downloads
