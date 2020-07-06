import React from 'react'

class SwimlaneTitle extends React.Component{
  render(){
    var alt_text = '';
    return(
      <section className="swimlane p-x p-xl m-y m-lg">
			<h2 className="display-primary-5 m-y">Popular Movies</h2>
			<div className="row m-l cards-sm">
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img alt={alt_text} className="thumbnail" src={require('../img/movies/basicinstinct.jpg')} />
						<img alt={alt_text} className="flag i-lg icon svg" src={require('../img/icons/play-icon-primary.svg')} />
					</div>
					<h4 className="display-primary-2 m-t m-md">Basic Instinct</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img alt={alt_text} className="thumbnail" src={require('../img/movies/comingtoamerica.jpg')} />
						<img alt={alt_text} className="flag i-lg icon svg" src={require('../img/icons/play-icon-primary.svg')} />
					</div>
					<h4 className="display-primary-2 m-t m-md">Coming to America</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img alt={alt_text} className="thumbnail" src={require('../img/episodes/groundupthere201.jpg')} />
						<img alt={alt_text} className="flag i-lg icon svg" src={require('../img/icons/play-icon-primary.svg')} />
					</div>
					<h4 className="display-primary-2 m-t m-md">Face/Off</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img alt={alt_text} className="thumbnail" src={require('../img/episodes/root401.jpg')} />
						<img alt={alt_text} className="flag i-lg icon svg" src={require('../img/icons/play-icon-primary.svg')} />
					</div>
					<h4 className="display-primary-2 m-t m-md">Sleepless in Seattle</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img alt={alt_text} className="thumbnail" src={require('../img/episodes/back102.jpg')} />
						<img alt={alt_text} className="flag i-lg icon svg" src={require('../img/icons/play-icon-primary.svg')} />
					</div>
					<h4 className="display-primary-2 m-t m-md">Roots</h4>
				</div>
			</div>
	    </section>
    )
  }
}

export default SwimlaneTitle
