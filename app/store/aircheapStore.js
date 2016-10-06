import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const logger = (store) => (next) => (action) => {
  if(typeof action !== "function"){
    console.log('dispatching:', action);
  }
  return next(action);
};
/*global someFunction window:true*/
/*eslint no-undef: "error"*/
const enhancers = compose( // for reduce dev-tools
  applyMiddleware(thunk, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const aircheapStore = createStore(
  reducers,
  enhancers
);

export default aircheapStore;
