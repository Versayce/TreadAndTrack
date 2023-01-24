import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import NavBar from './components/Main Header/NavBar';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import UsersList from './components/Users/UsersList';
import User from './components/Users/User';
import EventList from './components/Events/EventList'
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/events' exact={true} >
          <EventList/>
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <h1>Track && Tread</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
