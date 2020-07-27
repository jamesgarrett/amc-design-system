import React, {Component} from 'react'
import getType from '../functions/getType.js'

class TypeTable extends Component {
	render(){
		let typeStyles = getType(this.props.network)
		if (!typeStyles) {
		 return <>
		 <ul className="typography col-12 p-y m-x">
			 <h4 className="display-primary-6">Typography Coming Soon</h4>
			</ul>
		 </>
	 } else{
			return <>
        <ul className="typography col-12 p-y m-x">
          <li className="row m-x">
            <span className="top-row body-sm p-x p-y">Class Name</span>
            <span className="body-sm p-x p-y">Font Family</span>
            <span className="body-sm p-x p-y">Scale</span>
            <span className="body-sm p-x p-y">Case</span>
            <span className="body-sm p-x p-y">Line Height</span>
            <span className="body-sm p-x p-y">Font Weight</span>
            <span className="body-sm p-x p-y">Letter Spacing</span>
          </li>
          {typeStyles.map(typeStyle =>
            <li key={typeStyle.name} className="row m-x">
              <span className={`top-row ${typeStyle.name} p-x p-y`} style={{fontFamily: `${typeStyle.font.postscriptName}`, lineHeight: `${typeStyle.lineHeight}px`, color: `${typeStyle.color.hex}`, fontSize: `${typeStyle.font.size}px` }}>{typeStyle.name}</span>
              <span className="body-sm p-x p-y">{typeStyle.font.family}</span>
              <span className="body-sm p-x p-y">{typeStyle.font.size}</span>
              <span className="body-sm p-x p-y">{typeStyle.textTransform}</span>
              <span className="body-sm p-x p-y">{typeStyle.lineHeight}</span>
              <span className="body-sm p-x p-y">{typeStyle.font.weight}</span>
              <span className="body-sm p-x p-y">{typeStyle.font.stretch}</span>
            </li>
          )}
        </ul>
			</>
		}
	}
}

export default TypeTable
