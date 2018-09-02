import { createStore } from 'redux';
import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import RootMiddleware from './middlewares/root_middleware';

export const store = createStore(
  allReducers,
  composeWithDevTools(RootMiddleware)
);
  