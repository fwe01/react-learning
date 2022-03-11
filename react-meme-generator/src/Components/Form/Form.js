import React, {useEffect, useState} from 'react';
import './Form.css'
import Meme from "../Meme/Meme";
import GetMemes from "../../Service/GetMemes";
import meme from "../Meme/Meme";

const Form = () => {
	let [imageUrl, setImageUrl] = useState('./images/troll-face.png');
	let [memeText, setMemeText] = useState(
		{
			topText: 'This is top text',
			bottomText: 'This is bottom text',
		}
	);
	let [allMemes, setAllMemes] = useState([])

	useEffect(() => {
		GetMemes.execute().then((memes) => {
			setAllMemes(memes)
		})
	}, [imageUrl]);


	function getRandomMeme() {
		let randomNumber = Math.floor(Math.random() * allMemes.length)
		let selectedMemes = allMemes[randomNumber]
		setImageUrl(selectedMemes.url)
	}

	function handleChange(event) {
		setMemeText(prevText => {
			return {
				...prevText,
				[event.target.name]: event.target.value
			}
		})
	}


	return (
		<div>
			<div className={'meme-generator-form'}>
				<div className="input-row">
					<input name={'topText'} type="text" placeholder={'Top text'} className={'form-input'}
						   onChange={handleChange}
						   value={memeText.topText}
					/>
					<input name={'bottomText'} type="text" placeholder={'Bottom text'} className={'form-input'}
						   onChange={handleChange}
						   value={memeText.bottomText}
					/>
				</div>
				<button className={'form-button'} onClick={getRandomMeme}>
					Get a new meme image
				</button>
			</div>
			<Meme imgUrl={imageUrl} text={memeText}/>
		</div>
	);
};

export default Form;
