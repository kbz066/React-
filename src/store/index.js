import {
  createStore,
  compose,
  applyMiddleware
} from "redux";
import reducers from './reducers'
import thunk from "redux-thunk"
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose;

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);
let store = createStore(
  reducers,
  enhancer
)
sagaMiddleware.run(mySaga)


export default store;