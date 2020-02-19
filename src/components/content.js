import React from 'react'

class Content extends React.Component{
	render(){
		return(
			<div className="typography {this.props.networkname}">

        <div class="row m-b m-lg">
    			<article className="typeTable">
                <th className="row">
                  <td className="typeName col-2">Class Name</td>
                  <td className="col-1">Font</td>
                  <td className="col-1">Scale</td>
                  <td className="col-1">Case</td>
                  <td className="col-1">Weight</td>
                  <td className="col-1">Size</td>
                  <td className="col-1">Spacing</td>
                  <td className="col-1">Line-Height</td>
                </th>
                <tr className="row">
                  <td className="typeName col-2"><h1 className="headline-1">Headline 1</h1></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">09</td>
                  <td className="col-1">Lowercase</td>
                  <td className="col-1">300</td>
                  <td className="col-1">48</td>
                  <td className="col-1">0</td>
                  <td className="col-1">68</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><h2 className="headline-2">Headline 2</h2></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">07</td>
                  <td className="col-1">Lowercase</td>
                  <td className="col-1">300</td>
                  <td className="col-1">40</td>
                  <td className="col-1">0</td>
                  <td className="col-1">52</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><h3 className="headline-3">Headline 3</h3></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">06</td>
                  <td className="col-1">Lowercase</td>
                  <td className="col-1">300</td>
                  <td className="col-1">32</td>
                  <td className="col-1">0</td>
                  <td className="col-1">36</td>
                </tr>
                    
                <tr className="row">
                  <td className="typeName col-2"><h3 className="headline-4">Headline 4</h3></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">04</td>
                  <td className="col-1">Lowercase</td>
                  <td className="col-1">300</td>
                  <td className="col-1">24</td>
                  <td className="col-1">0</td>
                  <td className="col-1">28</td>
                </tr>   

                <tr className="row">
                  <td className="typeName col-2"><h3 className="headline-5">Headline 5</h3></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">03</td>
                  <td className="col-1">Lowercase</td>
                  <td className="col-1">300</td>
                  <td className="col-1">20</td>
                  <td className="col-1">0</td>
                  <td className="col-1">24</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><h3 className="headline-6">Headline 6</h3></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">01</td>
                  <td className="col-1">Lowercase</td>
                  <td className="col-1">300</td>
                  <td className="col-1">16</td>
                  <td className="col-1">0</td>
                  <td className="col-1">20</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><div className="body-1">Body 1</div></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">00</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">400</td>
                  <td className="col-1">14</td>
                  <td className="col-1">0</td>
                  <td className="col-1">16</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><div className="body-2">Body 2</div></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">00</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">400</td>
                  <td className="col-1">14</td>
                  <td className="col-1">0</td>
                  <td className="col-1">14</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><div className="subhead-1">Subhead 1</div></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">01</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">16</td>
                  <td className="col-1">0</td>
                  <td className="col-1">16</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><div className="subhead-2">Subhead 2</div></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">00</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">14</td>
                  <td className="col-1">0</td>
                  <td className="col-1">14</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><div className="button">Button</div></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">01</td>
                  <td className="col-1">Uppercase</td>
                  <td className="col-1">Bold</td>
                  <td className="col-1">16</td>
                  <td className="col-1">1.25</td>
                  <td className="col-1">20</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><div className="caption">Caption</div></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">00</td>
                  <td className="col-1">Uppercase</td>
                  <td className="col-1">Bold</td>
                  <td className="col-1">14</td>
                  <td className="col-1">1</td>
                  <td className="col-1">16</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-2"><div className="label">Label</div></td>
                  <td className="col-1">Benton Sans</td>
                  <td className="col-1">01</td>
                  <td className="col-1">Uppercase</td>
                  <td className="col-1">Bold</td>
                  <td className="col-1">12</td>
                  <td className="col-1">1.5</td>
                  <td className="col-1">16</td>
                </tr>
            </article>
          </div>

        </div>
		)
	}
	
}

export default Content;   


