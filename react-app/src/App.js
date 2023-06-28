import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';

import ProtectedRoute from './components/Auth/ProtectedRoute';
import User from './components/Users/User';
import EventList from './components/Events/EventList'
import { authenticate } from './store/session';
import EventPage from './components/Events/EventPage';
import ConditonalModal from './components/Modal/ConditionalModal';
import HomePage from './components/Home/HomePage';
import EventForm from './components/Forms/EventForm/CreateEvent';
import NavBar from './components/Home/NavBar';
import CarForm from './components/Forms/CarForm/CreateCar';
import MapContainer from './components/Map/MapContainer';



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
		<Switch>
			<Route path='/login' exact={true}>
				<LoginForm />
			</Route>
			<Route path='/sign-up' exact={true}>
				<SignUpForm />
			</Route>
			//TODO remove test map route 
			<Route path='/map' exact={true}>
				<MapContainer />
			</Route>
			<ProtectedRoute path='/cars/create' exact={true}>
				<CarForm />
			</ProtectedRoute>
			<ProtectedRoute path='/users/:userId' exact={true}>
				<User />
			</ProtectedRoute>
			<ProtectedRoute path='/events' exact={true}>
				<NavBar />
				<EventList />
			</ProtectedRoute>
			<ProtectedRoute path='/events/create' exact={true}>
				<EventForm />
			</ProtectedRoute>
			<ProtectedRoute path='/events/:eventId' exact={true}>
				<EventPage />
			</ProtectedRoute>
			<Route path='/' exact={true}>
    			<HomePage />
			</Route>
		</Switch>
	<ConditonalModal />
    </BrowserRouter>
	</>
  )
}


export default App;
