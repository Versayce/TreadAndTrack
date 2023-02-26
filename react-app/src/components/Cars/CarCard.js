import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getOneCar, clearOneCar, LikeCar, deleteCar } from '../../store/car';
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
            <CarCards onClick={() => setActiveCarPage(car.id)} key={car.id} car={car}>
                <TopInfo>
                    <h1>{car?.name}</h1>
                    {sessionUser.id === car.ownerId && <StyledButton as="button" onClick={() => showModalEvent(editCarModal, car.id)}>Edit Car</StyledButton>}
                    {sessionUser.id === car.ownerId && <StyledButton as="button" onClick={() => dispatch(deleteCar(car.id))}>Delete</StyledButton>}
                </TopInfo>
                {/* {car.previewImage ? <img alt='eventimg' src={`${car.previewImage}`} onError={e => {e.currentTarget.src = "/images/placeholderImage.png";}}/> : <img alt='placeholder' src='/images/placeholderImage.png'/>} */}
                <BottomInfo>
                    <CarInfo>
                        {/* <p>{`${car.year}, ${car.make} ${car.model}`}</p> */}
                    </CarInfo>
                    { liked ? <div><i className="fa-solid fa-heart"></i></div> : <div><i className="fa-regular fa-heart"></i></div>}
                    <div>{`${car.likeCount}`}</div>
                </BottomInfo>
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

const TopInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

const BottomInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 5px;
    & i {
        color: #ca3e68;
    } div {
        color: #ffffff;
        text-shadow: 1px 1px 1px #49494939
    }
`

const StyledButton = styled.button`
    box-sizing: content-box;
    text-align: center;
    border: none;
    padding: 4px;
    margin: 4px;
    width: 85px;
    height: 20px;
    border-radius: 10px;
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
            /* background-color: #ffffff; */
            background-image: url(${props => `${props.car.previewImage}`});
            background-size: cover;
            object-fit: cover;
            width: 25vw;
            height: 170px;
            min-height: 170px;
            max-width: 350px;
            min-width: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
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
                color: #ffffff;
                text-shadow: 1px 1px 1px #49494939
            }& p {
                font-size: min(max(10px, 2vw), 15px);
                color: #3f3f3fb0;
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
