import React from 'react';
import { CounterButton } from './CounterButton';
import { CounterProvider } from './CounterProvider';

const App = () => {
	return (
    <CounterProvider>
      <h1>State Management Example</h1>
      <CounterButton />
    </CounterProvider>
  );
}

export default App;
