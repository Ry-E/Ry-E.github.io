import Header from './components/Header.js';
import Sketch from './components/Sketch.js';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<body className="app__body">
				<p>Ryan Eldon</p>
				<h3>Web and App Development Portfolio</h3>
				<h2>IMG</h2>
				<Sketch />
			</body>
		</div>
	);
}

export default App;
