import { createState, useState } from '@hookstate/core';
import CounterButton from './CounterButton';
import './App.css';


const App = () => {
  const globalState = createState({counter: 0});
	return (
		<div>
			<h1>State Management Example</h1>
			<CounterButton globalState={globalState}/>
			<CounterButton globalState={globalState}/>
		</div>
	);
}

export default App;
