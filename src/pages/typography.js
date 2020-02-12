import React from 'react';
import Sidenav from '../components/sidenav';
import { NavLink, Switch, Route } from 'react-router-dom';


class Typography extends React.Component{
	render(){
		return(

      <main>

      <Sidenav/>

      <section className="intro m-b col-6">
        <h1 className='headline-1 m-v'>Typography</h1>
        <h4 className='headline-4 m-v col-8'>About the System</h4>
        <p className='subhead-1 description m-v'>The goal of the type system is to define a repeatable set of elements that can be deployed rapidly with consistent results. We use a core set of styles, and a fixed, unit independent sizing scale to generate consistent, readable type pairings.</p>
      </section>

      <div className="typography">

        <div class="row m-b m-lg">
    			<article className="typeTable">
                <th className="row">
                  <td className="typeName col-3">Class Name</td>
                  <td className="col-1">Scale</td>
                  <td className="col-1">Case</td>
                  <td className="col-1">Weight</td>
                  <td className="col-1">Size</td>
                  <td className="col-1">Spacing</td>
                  <td className="col-1">Line-Height</td>
                </th>
                <tr className="row">
                  <td className="typeName col-3"><h1 className="headline-1">Headline 1</h1></td>
                  <td className="col-1">13</td>
                  <td className="col-1">Capitalize</td>
                  <td className="col-1">200</td>
                  <td className="col-1">60</td>
                  <td className="col-1">-1.5</td>
                  <td className="col-1">68</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><h2 className="headline-2">Headline 2</h2></td>
                  <td className="col-1">09</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">48</td>
                  <td className="col-1">-0.5</td>
                  <td className="col-1">52</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><h3 className="headline-3">Headline 3</h3></td>
                  <td className="col-1">06</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">32</td>
                  <td className="col-1">-0.5</td>
                  <td className="col-1">36</td>
                </tr>
                    
                <tr className="row">
                  <td className="typeName col-3"><h3 className="headline-4">Headline 4</h3></td>
                  <td className="col-1">04</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">24</td>
                  <td className="col-1">0.25</td>
                  <td className="col-1">28</td>
                </tr>   

                <tr className="row">
                  <td className="typeName col-3"><h3 className="headline-5">Headline 5</h3></td>
                  <td className="col-1">03</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">20</td>
                  <td className="col-1">0.25</td>
                  <td className="col-1">24</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><h3 className="headline-6">Headline 6</h3></td>
                  <td className="col-1">02</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">18</td>
                  <td className="col-1">0.15</td>
                  <td className="col-1">20</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><div className="body-1">Body 1</div></td>
                  <td className="col-1">01</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">400</td>
                  <td className="col-1">16</td>
                  <td className="col-1">0</td>
                  <td className="col-1">16</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><div className="body-2">Body 2</div></td>
                  <td className="col-1">00</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">400</td>
                  <td className="col-1">14</td>
                  <td className="col-1">0</td>
                  <td className="col-1">14</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><div className="subhead-1">Subhead 1</div></td>
                  <td className="col-1">01</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">16</td>
                  <td className="col-1">0</td>
                  <td className="col-1">16</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><div className="subhead-2">Subhead 2</div></td>
                  <td className="col-1">00</td>
                  <td className="col-1">Sentence</td>
                  <td className="col-1">300</td>
                  <td className="col-1">14</td>
                  <td className="col-1">0</td>
                  <td className="col-1">14</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><div className="button">Button</div></td>
                  <td className="col-1">01</td>
                  <td className="col-1">Uppercase</td>
                  <td className="col-1">Bold</td>
                  <td className="col-1">16</td>
                  <td className="col-1">1.25</td>
                  <td className="col-1">20</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><div className="caption">Caption</div></td>
                  <td className="col-1">00</td>
                  <td className="col-1">Uppercase</td>
                  <td className="col-1">Bold</td>
                  <td className="col-1">14</td>
                  <td className="col-1">1</td>
                  <td className="col-1">16</td>
                </tr>

                <tr className="row">
                  <td className="typeName col-3"><div className="label">Label</div></td>
                  <td className="col-1">000</td>
                  <td className="col-1">Uppercase</td>
                  <td className="col-1">Bold</td>
                  <td className="col-1">12</td>
                  <td className="col-1">1.5</td>
                  <td className="col-1">16</td>
                </tr>
            </article>
          </div>

        </div>

        </main>
		)
	}
	
}

export default Typography;