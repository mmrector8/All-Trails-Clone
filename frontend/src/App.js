import LoginFormPage from "./components/LoginFormPage";
import SignUpForm from "./components/SignUpFormPage";
import Navigation from "./components/Navigation";
import HikeIndexPage from "./components/HikeIndexPage"
import HikeShowPage from "./components/HikeShowPage";
import ParkShowPage from "./components/ParkShowPage"
import ComponentError from "./components/ComponentError"
import SplashPage from "./components/SplashPage";
import Footer from "./components/Footer";
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReviewModalContainer from "./components/Reviews/ReviewModalContainer";

function App() {
  return (
    <>
        <Navigation />
        <Switch>
        <Route exact path="/">
          <SplashPage />
        </Route>
        <Route exact path="/hikes">
          <HikeIndexPage />
        </Route>
        <Route exact path={"/parks/:parkId"}>
          <ParkShowPage />
        </Route>
        <Route exact path={`/hikes/:hikeId`}>
          <HikeShowPage />
        </Route>
        < Route exact path='/signup'>
          <SignUpForm />
        </Route>
        <Route exact path="/hikes/:hikeId/reviews/reviewId">
            <ReviewModalContainer />
        </Route>
        <Route exact path='/login'>
          <LoginFormPage modal={false}/>
        </Route>
        <Route component={ComponentError} />
        </Switch>
        <Footer />
    </>
  );
}

export default App;
