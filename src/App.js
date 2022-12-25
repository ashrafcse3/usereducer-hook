import { useReducer } from 'react';
import './App.css';

const initialState = {
  counter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + action.value };
    case 'decrement':
      return { counter: state.counter - action.value };
    default:
      return state;
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>Count : {count.counter}</div>
      <button type='button' onClick={() => dispatch({
        type: 'increment',
        value: 1,
      })}>Increment by 1</button>
      <button type='button' onClick={() => dispatch({
        type: 'increment',
        value: 3
      })}>Increment by 3</button>
      <button type='button' onClick={() => dispatch({
        type: 'decrement',
        value: 1,
      })}>Decrement by 1</button>
      <button type='button' onClick={() => dispatch({
        type: 'decrement',
        value: 3,
      })}>Decrement by 3</button>
    </div>
  );
}

export default App;
