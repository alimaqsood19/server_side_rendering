import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Wont import Provider, because were just creating the redux store
//Redux Store created on server will behave slightly different than the client

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};
