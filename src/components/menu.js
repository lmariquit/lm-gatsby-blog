import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
	<div style={{
		background: '#f4f4f4',
		paddingTop: '10px'
	}}>
		<ul style={{
			listStyle: none,
			display: 'flex',
			justifyContent: 'space-evenly'
		}}>
			<li><Link to="/">HOME</Link></li>
			<li><Link to="/about">ABOUT</Link></li>
			<li><Link to="/services">SERVICES</Link></li>
		</ul>
	</div>
)

export default Menu;