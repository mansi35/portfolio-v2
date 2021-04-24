import './App.css';
import About from './components/About';
import Achievements from './components/Achievements';
import Home from './components/Home';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';

function App() {
	return (
		<div className="App">
			<Layout>
				<Home />
				<About />
				<Achievements />
				<Portfolio />
			</Layout>
		</div>
	);
}

export default App;
