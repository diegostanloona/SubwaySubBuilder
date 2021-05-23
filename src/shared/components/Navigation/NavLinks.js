import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

	return ( <ul className="nav-links">
		<li>
			<NavLink to="/" exact>INICIO</NavLink>
		</li>
		<li>
			<NavLink to="/createSandwich">¡CREA TU SUB!</NavLink>
		</li>
		<li>
			<NavLink to="/cart">CARRITO</NavLink>
		</li>
	</ul>);
};

export default NavLinks;
