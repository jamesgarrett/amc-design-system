import React from 'react';
import NetworkNav from '../components/networknav';
import AmcType from '../networks/amc';
import SundanceType from '../networks/sundance';
import Conversions from '../pages/conversions';
import heroBackground from '../img/shows/rosehaven-image_wide_16x9.jpg';

const NetworkPage = ({ match, location }) => {
	const { params: { network } } = match;
	var net = network;
	var divStyle = {
		backgroundImage : 'url(' + heroBackground + ')',
	}

	return (
	<div className={net}>
	  <body> 
		<NetworkNav />   
		<section className="hero" style={divStyle}>
			<div className="hero-content gutter">
				<h5 className="tertiary-5 m-t">Returns October 6th</h5>
				<h1 className="headline-1">Rosehaven</h1>
				<p className="body-md">Daniel returns to his Tasmanian hometown to help his mom with her real estate business.</p>
				<button className="button-md m-b">Watch Trailer</button>
			</div>
	    </section>
	    <section className="swimlane gutter m-v m-lg">
			<h2 className="headline-3 m-v">Latest Episodes</h2>
			<div className="row m-l cards-sm">
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/episodes/back102.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h6 className="label-primary-xs m-t">S1, EP. 2</h6>
					<h4 className="headline-4">Back</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/episodes/lawandorder1111.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h6 className="label-primary-xs m-t">S11, EP. 11</h6>
					<h4 className="headline-4">Law & Order</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/episodes/groundupthere201.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h6 className="label-primary-xs m-t">S1, EP. 1</h6>
					<h4 className="headline-4">The Ground Up There</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/episodes/root401.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h6 className="label-primary-xs m-t">S1, EP. 2</h6>
					<h4 className="headline-4">Roots</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/episodes/back102.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h6 className="label-primary-xs m-t">S1, EP. 2</h6>
					<h4 className="headline-4">Roots</h4>
				</div>
			</div>
	    </section>
	    <section className="grid gutter m-v m-lg">
			<h2 className="headline-3 m-v">Featured Shows</h2>
			<div className="row m-l cards-md">
				<div className="card m-b">
					<img className="thumbnail" src={require('../img/shows/closeup.jpg')} />
					<h6 className="label-primary-xs m-t">Returns October 6</h6>
					<h4 className="headline-4 m-t m-sm">Close Up with the Hollywood Reporter</h4>
				</div>
				<div className="card m-b">
					<img className="thumbnail" src={require('../img/shows/back.jpg')} />
					<h6 className="label-primary-xs m-t">Sunday 8/9c</h6>
					<h4 className="headline-4 m-t m-sm">Back</h4>
				</div>
				<div className="card m-b">
					<img className="thumbnail" src={require('../img/shows/groundupthere.jpg')} />
					<h4 className="headline-4 m-t">Ground Up There</h4>
				</div>
				<div className="card m-b">
					<img className="thumbnail" src={require('../img/shows/bobnewhartshow.jpg')} />
					<h4 className="headline-4 m-t">Bob Newhart Show</h4>
				</div>
				<div className="card m-b">
					<img className="thumbnail" src={require('../img/shows/andygriffithshow.jpg')} />
					<h4 className="headline-4 m-t">The Andy Griffith Show</h4>
				</div>
				<div className="card m-b">
					<img className="thumbnail" src={require('../img/shows/lawandorder.jpg')} />
					<h4 className="headline-4 m-t">Bob Newhart Show</h4>
				</div>
			</div>
	    </section>
	    <section className="swimlane gutter m-v m-lg">
			<h2 className="headline-3 m-v">Popular Movies</h2>
			<div className="row m-l cards-sm">
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/movies/basicinstinct.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h4 className="headline-4 m-t">Basic Instinct</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/movies/comingtoamerica.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h4 className="headline-4 m-t">Coming to America</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/episodes/groundupthere201.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h4 className="headline-4 m-t">Face/Off</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/episodes/root401.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h4 className="headline-4 m-t">Sleepless in Seattle</h4>
				</div>
				<div className="card eyebrow-card m-b">
					<div className="card--top">
						<img className="thumbnail" src={require('../img/episodes/back102.jpg')} />
						<img className="flag" src={require('../img/icons/play-icon-rebrand.svg')} />
					</div>
					<h4 className="headline-4 m-t">Roots</h4>
				</div>
			</div>
	    </section>
	  </body>
	</div>
	);
};

export default NetworkPage;