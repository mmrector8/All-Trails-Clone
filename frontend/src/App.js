import LoginFormPage from "./components/LoginFormPage";
import SignUpForm from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import HikeIndexPage from "./components/HikeIndexPage"
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
        <Navigation />
        <Route exact path="/hikes">
          <HikeIndexPage />
        </Route>
        < Route exact path='/signup'>
          <SignUpForm />
        </Route>
        < Route exact path='/login'>
          <LoginFormPage />
        </Route>
    </>
  );
}

export default App;
