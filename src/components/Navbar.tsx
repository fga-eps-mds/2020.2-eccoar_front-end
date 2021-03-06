import React, { useState } from 'react';
import isotipo from '../assets/isotipo.svg';
import arrow from '../assets/arrow.svg';
import Drawer from './Drawer';
import BackDrop from './Backdrop';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const history = useHistory();

	const { pathname } = useLocation();
	const goBack = () => {
		history.goBack();
	};

	const handleCloseDrawer = () => {
		setDrawerOpen(false);
	};

	const onClick = () => setDrawerOpen(!drawerOpen);

	let backDrop;
	if (drawerOpen) backDrop = <BackDrop close={handleCloseDrawer} />;

	return pathname == '/' ||
		pathname == '/login' ||
		pathname == '/register/adress' ||
		pathname == '/register/email' ||
		pathname == '/register/name' ? (
		<></>
	) : (
		<nav className='navbar'>
			{pathname == '/home' ? (
				<></>
			) : (
				<img
					onClick={() => goBack()}
					src={arrow}
					className='navbar__Arrow'
					alt='arrowImg'
					data-testid='arrow'
				/>
			)}
			<Drawer close={handleCloseDrawer} show={drawerOpen} />
			{backDrop}
			<Link to='/home' data-testid='navbar__isotipo'>
				<img src={isotipo} className='navbar__isotipo' alt='isotipo' />
			</Link>
			<button
				type='button'
				onClick={onClick}
				className='navbar__button'
				data-testid='navbar-button'
			>
				<div className='navbar__hamburguer'>
					<div />
					<div />
					<div />
				</div>
			</button>
		</nav>
	);
};

export default Navbar;
