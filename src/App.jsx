import {useState} from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Card from './Card';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<h1>Carga estudiantes</h1>
			<form></form>
			<Card />
		</div>
	);
}

export default App;
