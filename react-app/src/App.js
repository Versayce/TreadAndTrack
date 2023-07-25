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
//Firebase Google analytics:
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
	const [loaded, setLoaded] = useState(false);
	const dispatch = useDispatch();

	const firebaseConfig = {
		apiKey: "AIzaSyCHeQMDhvQWyQJWRVGESMC8Ni1aoKwHlxU",
		authDomain: "tread-and-track.firebaseapp.com",
		projectId: "tread-and-track",
		storageBucket: "tread-and-track.appspot.com",
		messagingSenderId: "614394649059",
		appId: "1:614394649059:web:c5a892f5c7a54e7745e8d6"
	};

  	const app = initializeApp(firebaseConfig);
	const analytics = getAnalytics(app);

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
				<ProtectedRoute path='/cars/create' exact={true}>
					<CarForm />
				</ProtectedRoute>
				<ProtectedRoute path='/users/:userId' exact={true}>
					<User />
				</ProtectedRoute>
				<Route path='/events' exact={true}>
					<NavBar />
					<EventList />
				</Route>
				<ProtectedRoute path='/events/create' exact={true}>
					<EventForm />
				</ProtectedRoute>
				<Route path='/events/:eventId' exact={true}>
					<EventPage />
				</Route>
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
