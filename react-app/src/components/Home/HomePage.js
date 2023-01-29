import EventList from "../Events/EventList"
import Banner from "./Banner"
import NavBar from "./NavBar"
import { useDispatch } from "react-redux"


const HomePage = () => {

    return (
        <>
            <NavBar />
            <Banner />
            <EventList />  
        </>
    )
}

export default HomePage
