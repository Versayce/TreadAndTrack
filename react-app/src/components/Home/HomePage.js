import EventList from "../Events/EventList"
import Banner from "./Banner"
import NavBar from "./NavBar"
import styled from "styled-components"
import { clearOneEvent } from "../../store/event"
import { useDispatch } from "react-redux"
import { useEffect } from "react"

const HomePage = () => {
    const dispatch = useDispatch()

    return (
        <>
            <NavBar />
            <Banner />
            <EventList />  
        </>
    )
}

export default HomePage
