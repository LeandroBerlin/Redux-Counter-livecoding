import React from 'react';

// Imports from Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from '../reducers'

import logo from '../images/logo.svg';
import '../styles/App.css';
import Counter from './Counter';

function App() {

  const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Provider store={store} >
          <Counter />
        </Provider>
      </header>
    </div>
  );
}

export default App;
