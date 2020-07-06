import React from 'react'
import heroBackground from '../img/shows/rosehaven-image_wide_16x9.jpg';
import { Link } from 'react-router-dom';

var divStyle = {
  backgroundImage : 'url(' + heroBackground + ')',
}

  class Hero extends React.Component{

  render(){
		return(

      <section className="hero" style={divStyle}>
        <div className="hero-content p-x p-xl">
          <h5 className="display-tertiary-1 m-t">Returns October 6th</h5>
          <h1 className="display-primary-6">Rosehaven</h1>
          <p className="body-md">Daniel returns to his Tasmanian hometown to help his mom with her real estate business.</p>
          <Link to="#" className="button button-left button-primary m-t" target="_blank" download><img className="m-r i-md icon svg" src={require('../img/icons/play-icon-secondary.svg')} alt="play icon"/> Watch Trailer</Link>
        </div>
      </section>

    )
  }
}

export default Hero
