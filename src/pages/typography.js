import React from 'react'

class Typography extends React.Component{
	render(){
		return(

      <div className="typography">

        <header className="header-text">
          <h1 className='headline-1'>Typography</h1>
          <p className='subhead-1'>Our typography classes use a numeric scale to define a flexible, unit independent type system.</p>
        </header>



  			<article className="typeTable container-fixed">

              <th className="row">
                <td className="title">Markup</td>
                <td className="text-left">Class Name</td>
              </th>
              <tr className="row">
                <td className="title"><code>{'<h1></h1>'}</code></td>
                <td className="text-left"><h1 className="headline-1">.headline-1</h1></td>
              </tr>

              <tr className="row">
                <td className="title"><code>{'<h2></h2>'}</code></td>
                <td className="text-left"><h2 className="headline-2">.headline-2</h2></td>
              </tr>

              <tr className="row">
                <td className="title"><code>{'<h3></h3>'}</code></td>
                <td className="text-left"><h3 className="headline-3">.headline-3</h3></td>
              </tr>

              <tr className="row">
                <td className="title"><code>{'<h3></h3>'}</code></td>
                <td className="text-left"><h3 className="headline-3--strong">.headline-3--strong</h3></td>
              </tr>
                  
              <tr className="row">
                <td className="title"><code>{'<h4></h4>'}</code></td>
                <td className="text-left"><h4 className="headline-4">.headline-4</h4></td>
              </tr>   

              <tr className="row">
                <td className="title"><code>{'<h5></h5>'}</code></td>
                <td className="text-left"><h5 className="headline-5">.headline-5</h5></td>
              </tr>

              <tr className="row">
                <td className="title"><code>{'<h5></h5>'}</code></td>
                <td className="text-left"><h5 className="headline-5--strong">.headline-5--strong</h5></td>
              </tr>

              <tr className="row">
                <td className="title"><code>{'<h6></h6>'}</code></td>
                <td className="text-left"><h6 className="headline-6">.headline-6</h6></td>
              </tr>

              <tr className="row">
                <td className="title"><code>{'<p></p>'}</code></td>
                <td className="text-left"><div className="subhead-1">.subhead-1</div></td>
              </tr>

              <tr className="row">
                <td className="title"><div>{'<p></p>'}</div></td>
                <td className="text-left"><div className="subhead-2">.subhead-2</div></td>
              </tr>

              <tr className="row">
                <td className="title"><div>{'<p></p>'}</div></td>
                <td className="text-left"><div className="body-1">.body-1</div></td>
              </tr>

              <tr className="row">
                <td className="title"><div>{'<p></p>'}</div></td>
                <td className="text-left"><div className="body-2">.body-2</div></td>
              </tr>
          </article>
        </div>
		)
	}
	
}

export default Typography;