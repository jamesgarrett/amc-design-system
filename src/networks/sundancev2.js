import React from 'react'
import SundanceTypeStyles from '../data/typeStyles/sundance.js'

class SundanceTypeV2 extends React.Component{
  constructor(props){
    super();
    this.state = {SundanceTypeStyles};
  }

	render(){
    let typeStyles = this.state.SundanceTypeStyles
    console.log({typeStyles});
		return(
			<div className="typography col-12 m-v">
      <div className="row">
        <span className="body-lg">Name</span>
        <span className="body-lg">Font</span>
        <span className="body-lg">Size</span>
        <span className="body-lg">Line Height</span>
        <span className="body-lg">Weight</span>
        <span className="body-lg">Letter Spacing</span>
      </div>
      {typeStyles.map(typeStyle =>
        <li key={typeStyle.name} className="row p-y p-md">
          <span className="body-xs">{typeStyle.name}</span>
          <span className="body-xs">{typeStyle.font.postscriptName}</span>
          <span className="body-xs">{typeStyle.font.size}</span>
          <span className="body-xs">{typeStyle.lineHeight}</span>
          <span className="body-xs">{typeStyle.font.weight}</span>
          <span className="body-xs">{typeStyle.font.stretch}</span>
        </li>)}
      </div>
		)
	}

}

export default SundanceTypeV2;
