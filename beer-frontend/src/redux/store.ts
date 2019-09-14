import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './reducers';
import rootEpics from 'epics';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();
const middlewares = [epicMiddleware];

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;

epicMiddleware.run(rootEpics);
