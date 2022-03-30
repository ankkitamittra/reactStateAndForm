import { CounterButton } from './CounterButton';
import { Counter } from './Counter';
import './App.css';

const counter = new Counter();

const App = () => {
	return (
		<>
		<h1>Mobx State Management Example</h1>
		<CounterButton counter={counter} />
		<CounterButton counter={counter} />
		</>
	);
}

export default App;
