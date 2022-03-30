import React, {useState} from 'react';

const CounterButton = (props) => {
    return <>
        <p>Age length validator: {props.counter}</p> 
        <button onClick={() => props.setState(props.counter + 1)}>Increment</button>
    </>
}

export default CounterButton;