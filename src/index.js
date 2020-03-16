import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions';

import { createStore } from 'redux';
import todoApp from './reducers';

const store = createStore(todoApp);

// log the initial state
console.log(store.getState());

// Every time the state changes, log it.
// Note that subscribe() returns a function for deregistering the listener.
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// dispatch some actions
store.dispatch(addTodo("Learn about actions."));
store.dispatch(addTodo("Learn about reducers."));
store.dispatch(addTodo("Learn about store."));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// stop listening to state updates
unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
