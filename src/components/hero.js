import React from 'react'
import heroBackground from '../img/shows/rosehaven-image_wide_16x9.jpg';
var divStyle = {
  backgroundImage : 'url(' + heroBackground + ')',
}

  class Hero extends React.Component{

  render(){
		return(

      <section className="hero" style={divStyle}>
        <div className="hero-content gutter">
          <h5 className="tertiary-5 m-t">Returns October 6th</h5>
          <h1 className="headline-1">Rosehaven</h1>
          <p className="body-md">Daniel returns to his Tasmanian hometown to help his mom with her real estate business.</p>
          <button className="button-md m-b">Watch Trailer</button>
        </div>
      </section>

    )
  }
}

export default Hero
