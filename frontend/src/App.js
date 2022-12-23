import LoginFormPage from "./components/LoginFormPage";
import SignUpForm from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="app">
    <h1 className='title-text'>AllTrails</h1>
        <Navigation />
        < Route path='/login'>
          <LoginFormPage />
        </Route>
        < Route path='/signup'>
          <SignUpForm />
        </Route>
      </div>
    </>
  );
}

export default App;
