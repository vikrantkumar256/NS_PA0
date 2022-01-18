import React, { Component } from 'react';
// import logo from './logo.svg';
// import FirstComponent, {SecondComponent} from './components/learning/FirstComponent';
import './App.css';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        <TodoApp/>
      </div>
    );
  }
}
export default App;