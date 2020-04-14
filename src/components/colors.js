import React, {Component} from 'react'
import getBrand from '../components/getbrand.js'

class Colors extends Component {
	constructor(props){
		super(props);
	}
	render(){
		let brand = getBrand(this.props.network)
		return <section>
      <h4 className="display-primary-4 m-t m-lg">Color Hexes</h4>
      <p className="body-md">We use colors to give each of our applications it’s own unique feel.</p>
      <ul className="row five-up logos m-y">
  			{brand.colors.map(color =>
  				<li key={color.name} className="colors">
  					<span className="color m-b" style={{backgroundColor: color.rgb}}></span>
  					<span>Slug: {color.slug}</span>
  					<span>Name: {color.name}</span>
  					<span>Hex: {color.hex}</span>
  					<span>RGB: {color.rgb}</span>
  				</li>
  			)}
      </ul>
		</section>
	}
}

export default Colors
