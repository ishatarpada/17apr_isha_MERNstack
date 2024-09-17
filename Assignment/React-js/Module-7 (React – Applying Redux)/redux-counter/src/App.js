import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './Action/actions';
import './style/counter.css';

function Counter({ count, increment, decrement }) {
  return (
    <div className="App">
      <h1>Redux Counter App</h1>
      <p>Count: {count}</p>
      <div>
        <button
          onClick={increment}
          className="increment"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="decrement"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
