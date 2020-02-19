import React from 'react'
import Sidenav from '../components/sidenav';

  class Conversions extends React.Component{
	render(){
		return(    
			<nav>
		        <section className="intro m-b col-6">
			        <h2 className='headline-1 m-v col-8'>Common Conversions Table</h2>
	                <h4 className='headline-4 m-v col-8'>Please refer to this table for basic information about cross platform type standards.</h4>
			        <p className='subhead-1 m-b col-8'>Our typography classes use a numeric scale to define a flexible, unit independent type system. We use this system to translate our type accurately across platforms which use a variety of metrics for typography. We have provided a reference table for common sizing conversions:</p>          
				      <Sidenav />
			      </section>


			      <div class="row m-b m-lg">
			        <article className="typeTable">
			            <th className="row">
			              <td className="col-1">Scale</td>
			              <td className="col-1">Pixel Size</td>
			              <td className="col-1">Web</td>
			              <td className="col-1">iOS</td>
			              <td className="col-1">Android</td>
			            </th>
			            <tr className="row">
			              <td className="col-1 fs15">15</td>
			              <td className="col-1">68px</td>
			              <td className="col-1">4.25rem</td>
			              <td className="col-1">68pt</td>
			              <td className="col-1">68sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs14">14</td>
			              <td className="col-1">64px</td>
			              <td className="col-1">4rem</td>
			              <td className="col-1">64pt</td>
			              <td className="col-1">64sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs13">13</td>
			              <td className="col-1">60px</td>
			              <td className="col-1">3.75rem</td>
			              <td className="col-1">60pt</td>
			              <td className="col-1">60sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs12">12</td>
			              <td className="col-1">56px</td>
			              <td className="col-1">3.5rem</td>
			              <td className="col-1">56pt</td>
			              <td className="col-1">56sp</td>
			            </tr>

			            <tr className="row">
			              <td className="col-1 fs11">11</td>
			              <td className="col-1">52px</td>
			              <td className="col-1">3.25rem</td>
			              <td className="col-1">52pt</td>
			              <td className="col-1">52sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs10">10</td>
			              <td className="col-1">48px</td>
			              <td className="col-1">3rem</td>
			              <td className="col-1">48pt</td>
			              <td className="col-1">48sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs09">09</td>
			              <td className="col-1">40px</td>
			              <td className="col-1">2.5rem</td>
			              <td className="col-1">40pt</td>
			              <td className="col-1">40sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs08">08</td>
			              <td className="col-1">36px</td>
			              <td className="col-1">2.25rem</td>
			              <td className="col-1">36pt</td>
			              <td className="col-1">36sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs07">07</td>
			              <td className="col-1">32px</td>
			              <td className="col-1">2rem</td>
			              <td className="col-1">32pt</td>
			              <td className="col-1">32sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs06">06</td>
			              <td className="col-1">28px</td>
			              <td className="col-1">1.75rem</td>
			              <td className="col-1">28pt</td>
			              <td className="col-1">28sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs05">05</td>
			              <td className="col-1">24px</td>
			              <td className="col-1">1.5rem</td>
			              <td className="col-1">24pt</td>
			              <td className="col-1">24sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs04">04</td>
			              <td className="col-1">20px</td>
			              <td className="col-1">1.25rem</td>
			              <td className="col-1">20pt</td>
			              <td className="col-1">20sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs03">03</td>
			              <td className="col-1">18px</td>
			              <td className="col-1">1.125rem</td>
			              <td className="col-1">18pt</td>
			              <td className="col-1">18sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs02">02</td>
			              <td className="col-1">16px</td>
			              <td className="col-1">1rem</td>
			              <td className="col-1">16pt</td>
			              <td className="col-1">16sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs01">01</td>
			              <td className="col-1">14px</td>
			              <td className="col-1">.875rem</td>
			              <td className="col-1">14pt</td>
			              <td className="col-1">14sp</td>
			            </tr>
			            <tr className="row">
			              <td className="col-1 fs00">00</td>
			              <td className="col-1">12px</td>
			              <td className="col-1">.75rem</td>
			              <td className="col-1">12pt</td>
			              <td className="col-1">12sp</td>
			            </tr>
			        </article>
			      </div>
		    </nav>
		)
	}
	
}

export default Conversions;