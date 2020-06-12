import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faTrash, faPenAlt } from '@fortawesome/free-solid-svg-icons';

import store from './store';

library.add( faCheckSquare, faTrash, faPenAlt )


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className = 'container'>
            < Header />
            < AddTodo />
            < hr />
            < Todos className='overlay' />
          </div>
        </div>
      </Provider>
    )
  }
}

export default App