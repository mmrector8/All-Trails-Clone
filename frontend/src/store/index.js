import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import sessionReducer from './session';
import hikesReducer from './hikes';
import parksReducer from './parks';
import reviewsReducer from './reviews';
import usersReducer from './users';

const rootReducer = combineReducers({
    session: sessionReducer,
    hikes: hikesReducer,
    parks: parksReducer,
    reviews: reviewsReducer,
    user: usersReducer
})

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState = {}) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore
