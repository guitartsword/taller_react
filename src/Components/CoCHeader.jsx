import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

const header = (
	<Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				<Link to="/">LOGO HERE</Link>
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
			<LinkContainer to="/buildings">
				<NavItem eventKey={1}>Add Buildings</NavItem>
			</LinkContainer>
			<LinkContainer to="/troops">			
				<NavItem eventKey={2}>Add Troops</NavItem>
			</LinkContainer>
			
			<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
				<MenuItem eventKey={3.1}>Action</MenuItem>
				<MenuItem eventKey={3.2}>Another action</MenuItem>
				<MenuItem eventKey={3.3}>Something else here</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey={3.4}>Separated link</MenuItem>
			</NavDropdown>
		</Nav>
	</Navbar>
);

class CoCHeader extends Component{
	render() {
		return header;
	}
}

export default CoCHeader;

