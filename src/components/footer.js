import React from 'react'

const today = new Date();


class Footer extends React.Component{
	render(){
		return(
			<footer className=''>
				<div className='subtitle'>The digital assets and code included in these guidelines may only be used with the permission of, and for the benefit of, the AMC Networks Inc.</div>
				<div className='subtitle'>©AMC Networks {today.getFullYear()}</div>
			</footer>
		)
	}

}

export default Footer;
