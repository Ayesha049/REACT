import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBindd from './components/EventBindd';

function App() {
  return (
    <div className="App">
      <EventBindd/>
    </div>
  );
}

export default App;
