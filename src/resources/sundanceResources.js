import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import iconSet from '../data/icons.js';
import SundanceBrand from '../data/sundance-brand.js';

class SundanceResources extends React.Component{
  constructor(){
    super();
    this.state = {
        icons: {iconSet},
        brand: {SundanceBrand}.SundanceBrand,
    };
  }

  render(){
    let icons = this.state.icons.iconSet
    let logos = this.state.brand.logos
    let colors = this.state.brand.colors
    let fonts = this.state.brand.fonts
    let placeholders = this.state.brand.placeholders

    return(
      <div className='resources m-x'>

        <div className="container-fixed">

          <Logos logos={logos} />

          <h4 className="display-primary-4 m-t m-lg">Color Hexes</h4>
          <p className="body-md">We use colors to give each of our applications it’s own unique feel.</p>
          <ul className="row five-up logos m-y">
            {colors.map(color =>
              <li key={color.name} className="colors">
                <span className="color m-b" style={{backgroundColor: color.rgb}}></span>
                <span>Slug: {color.slug}</span>
                <span>Name: {color.name}</span>
                <span>Hex: {color.hex}</span>
                <span>RGB: {color.rgb}</span>
              </li>
            )}
          </ul>

          <h4 className="display-primary-4 m-t m-lg">Web Fonts</h4>
          <p className="body-md">You can download the fonts we use in our digital experiences here, or email <a href="mailto:garrett.sibinga@amcnetworks.com">garrett.sibinga@amcnetworks.com</a>, to use the webfont packages from our CDN.</p>

          <ul className="row four-up m-b m-lg">
          {fonts.map(font =>
            <li key={font.slug} className="m-b">
              <a href={font.download_link} target="_blank" rel="noopener noreferrer" download>
                <img alt={font.name} className={font.slug} src={font.img} />
              </a>
              <p className="display-primary-2">{font.name}</p>
            </li>
          )}
          </ul>

          <h4 className="display-primary-4 m-t m-lg">Icons</h4>
          <p className="body-md">We use icons in our experience as recognizable ways to quickly communicate familiar concepts and expected behaviors to our users.</p>
          <ul className="icon-set m-y">
            {icons.map(icon =>
              <li key={icon.slug} className="tile p-y p-md">
                <img className="icon m-y i-xl" src={icon.src} alt={icon.alt} />
                <p className="body-xs">{icon.alt}</p>
              </li>
            )}
          </ul>
          <p className="body-md">Download the full complement of icons in SVG format for use in your projects.</p>
          <Link to="/downloads/icons.zip" className="button-md button button-light m-y" target="_blank" rel="noopener noreferrer" download>
            <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all icons"/>
            Download All
          </Link>

          <h4 className="display-primary-4 m-t m-lg">Spinner Loaders</h4>
          <p className="body-md">Spinner loaders are used to indicate that an experience is loading in our applications.</p>
          <p className="body-md">Coming Soon</p>

          <h4 className="display-primary-4 m-t m-lg">Image Placeholders</h4>
          <p className="body-md">We use a set of images for each network as placeholders while image requests are fulfilled. Please use the set below as the placeholder images.</p>
          <ul class="row five-up">
          {placeholders.map(placeholder =>
            <li key={placeholder.slug} className="card p-y p-md">
              <img className="thumbnail" src={placeholder.src} alt={placeholder.alt} />
              <p className="body-xs">{placeholder.name}</p>
            </li>
          )}
          </ul>
        </div>
      </div>
    )

  }
}

class Logos extends Component {
  render(){
    return <section>
      <h4 className="display-primary-4 m-t m-lg">Logos</h4>
      <p className="body-md">A set of logos approved for use in  digital experiences.</p>
      <ul className="row five-up logos">
        {this.props.logos.map(logo =>
          <li key={logo.name} className={logo.dark}>
            <img className="m-y" src={logo.src} alt={logo.alt} />
            <p className="body-xs p-x tc">{logo.alt} - {logo.type}</p>
          </li>
        )}
      </ul>
      <p className="body-md">Download the full complement of logos in SVG format for use in your projects.</p>
      <Link to="/downloads/sundance-logos.zip" className="button-md button button-light m-y" target="_blank" rel="noopener noreferrer" download>
        <img className="m-r i-md" src={require('../img/icons/download.svg')} alt="download all logos"/>
        Download All
      </Link>
    </section>

  }
}

export default SundanceResources;
