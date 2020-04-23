import React, {Component} from 'react'
import getType from '../components/getType.js'

class TypeTable extends Component {
	render(){
		let typeStyles = getType(this.props.network)
		if (!typeStyles) {
		 return <>
			 <h4 className="display-primary-4 m-t m-lg">Type</h4>
			 <span className="body-md">Coming Soon</span>
		 </>
	 } else{
			return <>
        <ul className="typography col-12 p-y m-x">
          <li className="row m-x">
            <span className="top-row label-secondary p-x p-y">Class Name</span>
            <span className="label-secondary p-x p-y">Font Family</span>
            <span className="label-secondary p-x p-y">Scale</span>
            <span className="label-secondary p-x p-y">Case</span>
            <span className="label-secondary p-x p-y">Line Height</span>
            <span className="label-secondary p-x p-y">Font Weight</span>
            <span className="label-secondary p-x p-y">Letter Spacing</span>
          </li>
          {typeStyles.map(typeStyle =>
            <li key={typeStyle.name} className="row m-x">
              <span className={`top-row ${typeStyle.name} p-x p-y`}>{typeStyle.name}</span>
              <span className="body-md p-x p-y">{typeStyle.font.family}</span>
              <span className="body-md p-x p-y">{typeStyle.scale}</span>
              <span className="body-md p-x p-y">{typeStyle.textTransform}</span>
              <span className="body-md p-x p-y">{typeStyle.lineHeight}</span>
              <span className="body-md p-x p-y">{typeStyle.font.weight}</span>
              <span className="body-md p-x p-y">{typeStyle.font.stretch}</span>
            </li>
          )}
        </ul>
			</>
		}
	}
}

export default TypeTable
