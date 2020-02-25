import React from 'react'

class AmcType extends React.Component{
	render(){
    // {this.props.network}
		return(
		<div className="typography col-12 m-v">

		  <table className="row m-b m-lg">
				<tbody className="typeTable headerRow">
		          <tr className="row">
		            <td className="typeName col-3">Class Name</td>
		            <td className="col-1">Scale</td>
		            <td className="col-1">Case</td>
		            <td className="col-1">Weight</td>
		            <td className="col-1">Size</td>
		            <td className="col-1">Spacing</td>
		            <td className="col-1">Line-Height</td>
		          </tr>
		          <tr className="row">
		            <td className="typeName col-3"><h1 className="headline-1">Headline 1</h1></td>
		            <td className="col-1">10</td>
		            <td className="col-1">Capitalize</td>
		            <td className="col-1">200</td>
		            <td className="col-1">48</td>
		            <td className="col-1">0</td>
		            <td className="col-1">52</td>
		          </tr>

		          <tr className="row">
		            <td className="typeName col-3"><h2 className="headline-2">Headline 2</h2></td>
		            <td className="col-1">09</td>
		            <td className="col-1">Capitalize</td>
		            <td className="col-1">300</td>
		            <td className="col-1">40</td>
		            <td className="col-1">0</td>
		            <td className="col-1">44</td>
		          </tr>

		          <tr className="row">
		            <td className="typeName col-3"><h3 className="headline-3">Headline 3</h3></td>
		            <td className="col-1">07</td>
		            <td className="col-1">Capitalize</td>
		            <td className="col-1">300</td>
		            <td className="col-1">32</td>
		            <td className="col-1">0</td>
		            <td className="col-1">36</td>
		          </tr>

		          <tr className="row">
		            <td className="typeName col-3"><h3 className="headline-4">Headline 4</h3></td>
		            <td className="col-1">05</td>
		            <td className="col-1">Capitalize</td>
		            <td className="col-1">300</td>
		            <td className="col-1">24</td>
		            <td className="col-1">0</td>
		            <td className="col-1">28</td>
		          </tr>

		          <tr className="row">
		            <td className="typeName col-3"><h3 className="headline-5">Headline 5</h3></td>
		            <td className="col-1">04</td>
		            <td className="col-1">Capitalize</td>
		            <td className="col-1">300</td>
		            <td className="col-1">20</td>
		            <td className="col-1">0</td>
		            <td className="col-1">24</td>
		          </tr>

		          <tr className="row">
		            <td className="typeName col-3"><h3 className="headline-6">Headline 6</h3></td>
		            <td className="col-1">02</td>
		            <td className="col-1">Capitalize</td>
		            <td className="col-1">300</td>
		            <td className="col-1">16</td>
		            <td className="col-1">0</td>
		            <td className="col-1">20</td>
		          </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="label-primary-lg">Label Primary LG</div></td>
                <td className="col-1">04</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">600</td>
                <td className="col-1">20</td>
                <td className="col-1">1.5</td>
                <td className="col-1">24</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="label-primary-md">Label Primary MD</div></td>
                <td className="col-1">02</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">600</td>
                <td className="col-1">16</td>
                <td className="col-1">1.5</td>
                <td className="col-1">20</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="label-primary-sm">Label Primary SM</div></td>
                <td className="col-1">01</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">600</td>
                <td className="col-1">14</td>
                <td className="col-1">1.5</td>
                <td className="col-1">16</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="label-primary-xs">Label Primary XS</div></td>
                <td className="col-1">00</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">600</td>
                <td className="col-1">12</td>
                <td className="col-1">1.5</td>
                <td className="col-1">14</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="label-secondary-lg">Label Secondary LG</div></td>
                <td className="col-1">04</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">400</td>
                <td className="col-1">20</td>
                <td className="col-1">1</td>
                <td className="col-1">24</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="label-secondary-md">Label Secondary MD</div></td>
                <td className="col-1">02</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">400</td>
                <td className="col-1">16</td>
                <td className="col-1">1</td>
                <td className="col-1">20</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="label-secondary-sm">Label Secondary SM</div></td>
                <td className="col-1">01</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">400</td>
                <td className="col-1">14</td>
                <td className="col-1">1</td>
                <td className="col-1">16</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="label-secondary-xs">Label Secondary XS</div></td>
                <td className="col-1">00</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">400</td>
                <td className="col-1">12</td>
                <td className="col-1">1</td>
                <td className="col-1">14</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="button-lg">Button LG</div></td>
                <td className="col-1">04</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">600</td>
                <td className="col-1">20</td>
                <td className="col-1">1.5</td>
                <td className="col-1">24</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="button-md">Button MD</div></td>
                <td className="col-1">02</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">600</td>
                <td className="col-1">16</td>
                <td className="col-1">1.5</td>
                <td className="col-1">20</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="button-sm">Button SM</div></td>
                <td className="col-1">01</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">600</td>
                <td className="col-1">14</td>
                <td className="col-1">1.5</td>
                <td className="col-1">16</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="button-xs">Button XS</div></td>
                <td className="col-1">00</td>
                <td className="col-1">Uppercase</td>
                <td className="col-1">600</td>
                <td className="col-1">12</td>
                <td className="col-1">1.5</td>
                <td className="col-1">14</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="body-xl">Body XL</div></td>
                <td className="col-1">07</td>
                <td className="col-1">Sentence</td>
                <td className="col-1">300</td>
                <td className="col-1">24</td>
                <td className="col-1">0</td>
                <td className="col-1">32</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="body-lg">Body LG</div></td>
                <td className="col-1">04</td>
                <td className="col-1">Sentence</td>
                <td className="col-1">300</td>
                <td className="col-1">20</td>
                <td className="col-1">0</td>
                <td className="col-1">28</td>
              </tr>


              <tr className="row">
                <td className="typeName col-3"><div className="body-md">Body MD</div></td>
                <td className="col-1">02</td>
                <td className="col-1">Sentence</td>
                <td className="col-1">300</td>
                <td className="col-1">16</td>
                <td className="col-1">0</td>
                <td className="col-1">24</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="body-sm">Body SM</div></td>
                <td className="col-1">01</td>
                <td className="col-1">Sentence</td>
                <td className="col-1">400</td>
                <td className="col-1">14</td>
                <td className="col-1">0</td>
                <td className="col-1">20</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="body-xs">Body XS</div></td>
                <td className="col-1">00</td>
                <td className="col-1">Sentence</td>
                <td className="col-1">400</td>
                <td className="col-1">12</td>
                <td className="col-1">0</td>
                <td className="col-1">16</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="body-link-md">Body Link MD</div></td>
                <td className="col-1">02</td>
                <td className="col-1">Sentence</td>
                <td className="col-1">600</td>
                <td className="col-1">16</td>
                <td className="col-1">0</td>
                <td className="col-1">24</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="body-link-sm">Body Link SM</div></td>
                <td className="col-1">01</td>
                <td className="col-1">Sentence</td>
                <td className="col-1">600</td>
                <td className="col-1">14</td>
                <td className="col-1">0</td>
                <td className="col-1">20</td>
              </tr>

              <tr className="row">
                <td className="typeName col-3"><div className="body-link-xs">Body Link XS</div></td>
                <td className="col-1">00</td>
                <td className="col-1">Sentence</td>
                <td className="col-1">600</td>
                <td className="col-1">12</td>
                <td className="col-1">0</td>
                <td className="col-1">16</td>
              </tr>
		      </tbody>
		    </table>

		</div>

		)
	}

}

export default AmcType;
