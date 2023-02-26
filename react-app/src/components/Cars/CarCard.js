import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCar, clearOneCar, LikeCar } from '../../store/car';
import { renderCreateEventModal } from '../../store/modal';

// import { useHistory } from 'react-router-dom';


function CarCard() {
    // const history = useHistory()
    const dispatch = useDispatch();
    const carsObj = useSelector(state => state.cars.allCars)
    const cars = Object.values(carsObj)
    const sessionUser = useSelector(state => state.session.user)

    const setActiveCarPage = async (carId) => {
        await dispatch(clearOneCar())
        await dispatch(LikeCar(carId))
        await dispatch(getOneCar(carId))
        // history.push(`/cars/${carId}`)
    };

    const editCarModal = {
        modalToLoad: "editCarModal",
        styles: {
            width: "",
            height: ""
        }
    }

    const showModalEvent = (params, carId) => {
        console.log('params================', carId)
        dispatch(getOneCar(carId))
        dispatch(renderCreateEventModal(params))
    };

    const carCards = cars?.map((car) => {
        let liked;
        for(const like of car.likes) {
            if (like.userId === sessionUser.id) {
                liked = true
            }
        }
        
        return (
            <CarCards onClick={() => setActiveCarPage(car.id)} key={car.id}>
                <h1>{car?.name}</h1>
                {car.images[0]?.imageUrl ? <img alt='eventimg' src={`${car.images[0]?.imageUrl}`} onError={e => {e.currentTarget.src = "/images/placeholderImage.png";}}/> : <img alt='placeholder' src='/images/placeholderImage.png'/>}
                <CarInfo>
                    <p>{`${car.year}, ${car.make} ${car.model}`}</p>
                </CarInfo>
                <div className='car-desc'>{`Likes: ${car.likeCount}`}</div>
                { liked ? <div>{`Liked`}</div> : <div>{`Unliked`}</div>}
                <StyledButton as="button" onClick={() => showModalEvent(editCarModal, car.id)}>Edit Car</StyledButton>
            </CarCards>
        );
    });

    return (
        <Wrapper>
            <CardsWrapper>
                {carCards}
            </CardsWrapper>
        </Wrapper>
    ); 
}

const StyledButton = styled.button`
    box-sizing: content-box;
    text-align: center;
    border: none;
    padding: 5px;
    margin: 5px;
    width: 150px;
    height: 40px;
    border-radius: 15px;
    background-color: #353535;
    color: white;
    &:hover {
        background-color: #ca3e68;
        color: white;
        cursor: pointer;
    }
`

const Wrapper = styled.div`
    width: 100%;
    margin: 40px 0;
`

    const CardsWrapper = styled.div`
        box-sizing: border-box;
        padding-left: 10%;
        padding-right: 10%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        flex: 0 0 33.3333%;
        width: 100%;
        gap: 1vw;
    `

        const CarCards = styled.section`
            /* border: solid #0085a7 2px;   */
            background-color: #ffffff;
            width: 25vw;
            height: 305px;
            max-height: 250px;
            max-width: 400px;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            margin: 10px;
            padding: 15px;
            box-shadow: 1px 1px 10px 2px #8f8f8f39;
            position: relative;
            top: 0;
            transition: top ease 0.5s, box-shadow 0.5s ease-in-out;
            border-radius: 3px;
            & img {
                width: 100%;
                height: 130px;
                object-fit: cover;
                border-radius: 3px;
                margin: 4px 0px;
            }& h1 {
                font-family: Arial, Helvetica, sans-serif;
                width: 100%;
                font-size: min(max(22px, 2vw), 26px);
                white-space: nowrap; 
                color: #5a5a5a;
            }& p {
                font-size: min(max(10px, 2vw), 15px);
                color: #3f3f3fb0;
            }& .event-desc {
                height: 19%;
                text-overflow:ellipsis;
                overflow:hidden;
                font-size: 14pt;
                // multiline ellipsis
                display: -webkit-box !important;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                white-space: normal;
            }& ::-webkit-scrollbar {
                width: 6px;
            }& ::-webkit-scrollbar-track {
                border: 1px solid #3f3f3f2b;
                border-radius: 8px;
            }& ::-webkit-scrollbar-thumb {
                background-color: #adadad5c;
                border: 1px solid #ffffff2b;
                border-radius: 8px;
            } :hover {
                box-shadow: 1px 1px 10px 2px #49494939;
                cursor: pointer;
                top: -2px;
            }
        `
            const CarInfo = styled.div`
                /* border: red 1px solid; */
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                margin-bottom: 8px;
            `

export default CarCard
