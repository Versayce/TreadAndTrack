import React, { useEffect } from 'react';
import styled from 'styled-components'
import { getAllEvents } from '../../store/event';
import { useDispatch, useSelector } from 'react-redux'
import EventCard from './EventCard';
import CarCard from '../Cars/CarCard';
import { getAllCars } from '../../store/car';

function EventList() { 
    const dispatch = useDispatch()
    // pulling session user from state
    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser?.id
    const eventsObj = useSelector(state => state.events.allEvents)
    const events = Object.values(eventsObj)
    const carObj = useSelector(state => state.cars.oneCar)
    const car = Object.values(carObj)[0]
    const carsObj = useSelector(state => state.cars.allCars)
    const cars = Object.values(carsObj)

    useEffect(() => {
        dispatch(getAllEvents())
    }, [ dispatch, userId ]);

    useEffect(() => {
        dispatch(getAllCars())
    }, [ dispatch, userId, car?.likeCount ]);

    // Component contents
    return (
        <>
        <StyledHeading>Main Events</StyledHeading>
        <Wrapper>
            <EventCard events={events} /> 
        </Wrapper>

        <StyledHeading>Featured Cars</StyledHeading>
        <Wrapper>
            <CarCard cars={cars} /> 
        </Wrapper>
        </>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 2450px;
    height: 50%;
    max-height: 1900px;
`
const StyledHeading = styled.h1`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 100;
    margin-top: 60px;
    margin-bottom: 0px;
    margin-left: 230px;
    font-size: 35pt;
    color: #bd345d;
    display: flex;
    justify-content: flex-start;
    width: 100%;
`

export default EventList
