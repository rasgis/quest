import logo from "./logo.svg";
import "./App.css";

function App() {
	const thisYear = new Date().getFullYear(); // императивный
	// весь return это декларативный стиль
	return ( 
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="year">{thisYear}</div>
			</header>
		</div>
	);
}

export default App;
