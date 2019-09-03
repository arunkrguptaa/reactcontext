import React from 'react';
import ContextApiProvider, { ContextApi } from './context/contextapi';
import './App.css';

function App() {
  return (
    <div className="App">
      <ContextApiProvider>
        <ContextApi.Consumer>
          { ({count, setCount}) => (
              <>
                <div>{count}</div>
                <button onClick={() => setCount()}>Click to Increment</button>
              </>
            )
          }
        </ContextApi.Consumer>
      </ContextApiProvider>
    </div>
  );
}

export default App;
