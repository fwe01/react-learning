import React from 'react';
import './Meme.css'

const Meme = ({imgUrl, text}) => {
	return (
		<div className={'meme-container'}>
			<h3 className={'meme--text-top meme--text'}>{text.topText}</h3>
			<img className={'meme-img'} src={imgUrl} alt="Memes"/>
			<h3 className={'meme--text-bottom meme--text'}>{text.bottomText}</h3>
		</div>
	);
};

export default Meme;
