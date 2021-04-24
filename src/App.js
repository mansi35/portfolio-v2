import './App.css';
import About from './components/About';
import Achievements from './components/Achievements';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
	return (
		<div className="App">
			<Home />
			<About />
			<Achievements />
			<Portfolio />
		</div>
	);
}

export default App;
