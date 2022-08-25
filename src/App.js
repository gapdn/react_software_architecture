import React from 'react';
import { CounterButton } from './CounterButton';
import { Counter } from './Counter';

const counter = new Counter();

const App = () => {
	return (
    <>
      <h1>State Management Example</h1>
      <CounterButton counter={counter}/>
    </>
  );
}

export default App;
