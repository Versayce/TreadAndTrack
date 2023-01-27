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
import EventPage from './components/Events/EventPage';
import ConditonalModal from './components/Modal/ConditionalModal';
import styled from 'styled-components';


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
	<>
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
				<UsersList />
			</ProtectedRoute>
			<ProtectedRoute path='/users/:userId' exact={true} >
				<User />
			</ProtectedRoute>
			<ProtectedRoute path='/events' exact={true} >
				<EventList />
			</ProtectedRoute>
			<ProtectedRoute path='/events/:eventId' exact={true} >
				<EventPage />
			</ProtectedRoute>
			<Route path='/' exact={true} >
				<h1>Tread && Track</h1>
			</Route>
		</Switch>
    </BrowserRouter>
	<ConditonalModal />
	</>
  )
}


const ModalBackground = styled.div`
    box-sizing: border-box;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #000000d8;
    backdrop-filter: blur(3px);
    margin: none;
`



export default App;
