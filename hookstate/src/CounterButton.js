import React from 'react';
import { createState, useState } from '@hookstate/core';



const CounterButton = ({globalState}) => {
    const state = useState(globalState);
    return <>
        <p>Counter value: {state.counter.get()}</p> 
        <button onClick={() => state.counter.set((counter) => counter + 1)}>Increment</button>
    </>
}

export default CounterButton;