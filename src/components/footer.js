import React from 'react'

const today = new Date();


class Footer extends React.Component{
	render(){
		return(
			<footer className='footer p-x'>
				<div className='body-md'>The digital assets and code included in these guidelines may only be used with the permission of, and for the benefit of AMC Networks Inc.</div>
				<div className='body-xs'>©AMC Networks {today.getFullYear()}</div>
			</footer>
		)
	}

}

export default Footer;
