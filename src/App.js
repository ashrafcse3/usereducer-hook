import { useReducer } from 'react';
import './App.css';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>Count - {count}</div>
      <button type='button' onClick={() => dispatch('increment')}>Increment</button>
      <button type='button' onClick={() => dispatch('decrement')}>Decrement</button>
    </div>
  );
}

export default App;
