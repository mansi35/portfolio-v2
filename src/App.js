import './App.css';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Educations from './components/Educations';
import Home from './components/Home';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Spinner from './components/Spinner';

function App() {
	return (
		<div className="App">
			<Layout>
				<Home />
				<About />
				<Achievements />
				<Portfolio />
				<Educations />
				<Contact />
			</Layout>
			<Spinner duration={1000} />
		</div>
	);
}

export default App;
