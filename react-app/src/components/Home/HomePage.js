import EventList from "../Events/EventList"
import Banner from "./Banner"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useDispatch } from "react-redux"


const HomePage = () => {

    return (
        <>
            <NavBar />
            <Banner />
            <EventList />  
            <Footer />
        </>
    )
}

export default HomePage
