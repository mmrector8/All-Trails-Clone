import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import csrfFetch from './store/csrf'
import * as sessionActions from './store/session';
import * as parkActions from './store/parks'
// import restoreSession from './store/session'

const renderApplication = async () => {
  const store = configureStore();

  if (process.env.NODE_ENV !== 'production') {
    window.store = store;
    window.csrfFetch = csrfFetch;
    // window.sessionActions = sessionActions;
    // window.hikeActions = hikeActions;
    window.parkActions = parkActions;
  }

    function Root() {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
    }

    ReactDOM.render(
      <React.StrictMode>
        <Root />
      </React.StrictMode>,
      document.getElementById('root')
    );
    return store;
}

//renderApplication()

if (sessionStorage.getItem("X-CSRF-Token") === null || sessionStorage.getItem("curentUser") === null) {
  // restoreSession().then(renderApplication);
  renderApplication()
    .then((store)=>store.dispatch(sessionActions.restoreSession()))
} else {
  renderApplication();
}
