// const page = (
// 	<div>
// 		<h1 className="header">This is JSX</h1>
// 		<p>This is a text paragraph</p>
// 	</div>
// );
// ReactDOM.render(page, document.getElementById("root"));

function Header() {
	return (
		<header>
			<nav className="nav">
				<img src="./react-logo.png" className="react-logo" />
				<ul className="nav-items">
					<li>Pricing</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</header>
	);
}

function LearnReact() {
	return (
		<div>
			<h1>Reasons I'm excited to learn React</h1>
			<ol>
				<li>
					It's a popular library, so I'll be able to fit in with the
					cool kids!
				</li>
				<li>
					I'm more likely to get a job as a developer if I know React
				</li>
			</ol>
		</div>
	);
}

function Footer() {
	return (
		<footer className="footer">
			<small>© 2021 EXinsTINCT development. All rights reserved.</small>
		</footer>
	);
}

function Page() {
	return (
		<div>
			<Header />
			<LearnReact />
			<Footer />
		</div>
	);
}

ReactDOM.render(<Page />, document.getElementById("root"));
