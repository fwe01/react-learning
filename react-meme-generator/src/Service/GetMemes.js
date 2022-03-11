import axios from "axios";

class GetMemes {
	static async execute() {
		let memes = await axios.get("https://api.imgflip.com/get_memes")
			.then((response) => {
				return response.data.data.memes
			})
			.catch((error) => {
				console.error(error)
			})
		return memes;
	}
}

export default GetMemes
