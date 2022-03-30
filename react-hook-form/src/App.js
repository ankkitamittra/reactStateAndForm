import React, {useState} from 'react';
import CounterButton from './CounterButton';
import Form from './Form';
import './App.css';


const App = () => {
  const [state, setState] = useState(0);
	return (
		<div>
			<h1>State Management Example</h1>
			<CounterButton counter={state} setState={setState}/>
      <Form setState={setState} ageValidator={state}/>
		</div>
	);
}

export default App;