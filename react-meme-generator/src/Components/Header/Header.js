import React from 'react';
import './Header.css'

const Header = () => {
	return (
		<header>
			<div className="logo-container">
				<img className={'logo-img'} src="./images/troll-face.png" alt=""/>
				<h2 className={'logo-text'}>
					Meme Generator
				</h2>
			</div>
			<div className="slogan">
				<h3 className="slogan-text">
					U Mad Bro?
				</h3>
			</div>
		</header>
	);
};

export default Header;
