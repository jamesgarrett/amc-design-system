import React from 'react';

class SwimlaneEyebrow extends React.Component{

render(){
  var alt_text = ''
  return(

    <section className="swimlane gutter m-v m-lg">
      <h2 className="headline-3 m-v">Latest Episodes</h2>
      <div className="row m-l cards-sm">
        <div className="card eyebrow-card m-b">
          <div className="card--top">
            <img alt={alt_text} className="thumbnail" src={require('../img/episodes/back102.jpg')} />
            <img alt={alt_text} className="flag" src={require('../img/icons/play-icon-primary.svg')} />
          </div>
          <h6 className="label-primary-xs m-t">S1, EP. 2</h6>
          <h4 className="headline-4">Back</h4>
        </div>
        <div className="card eyebrow-card m-b">
          <div className="card--top">
            <img alt={alt_text} className="thumbnail" src={require('../img/episodes/lawandorder1111.jpg')} />
            <img alt={alt_text} className="flag" src={require('../img/icons/play-icon-primary.svg')} />
          </div>
          <h6 className="label-primary-xs m-t">S11, EP. 11</h6>
          <h4 className="headline-4">Law & Order</h4>
        </div>
        <div className="card eyebrow-card m-b">
          <div className="card--top">
            <img alt={alt_text} className="thumbnail" src={require('../img/episodes/groundupthere201.jpg')} />
            <img alt={alt_text} className="flag" src={require('../img/icons/play-icon-primary.svg')} />
          </div>
          <h6 className="label-primary-xs m-t">S1, EP. 1</h6>
          <h4 className="headline-4">The Ground Up There</h4>
        </div>
        <div className="card eyebrow-card m-b">
          <div className="card--top">
            <img alt={alt_text} className="thumbnail" src={require('../img/episodes/root401.jpg')} />
            <img alt={alt_text} className="flag" src={require('../img/icons/play-icon-primary.svg')} />
          </div>
          <h6 className="label-primary-xs m-t">S1, EP. 2</h6>
          <h4 className="headline-4">Roots</h4>
        </div>
        <div className="card eyebrow-card m-b">
          <div className="card--top">
            <img alt={alt_text} className="thumbnail" src={require('../img/episodes/back102.jpg')} />
            <img alt={alt_text} className="flag" src={require('../img/icons/play-icon-primary.svg')} />
          </div>
          <h6 className="label-primary-xs m-t">S1, EP. 2</h6>
          <h4 className="headline-4">Roots</h4>
        </div>
      </div>
    </section>

  )
}
}

export default SwimlaneEyebrow
