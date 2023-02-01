import EventList from "../Events/EventList"
import Banner from "./Banner"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"


const HomePage = () => {
    const currentUser = useSelector(state => state.session.user)

    return (
        <>
            <NavBar />
            <Banner />
            {currentUser && <EventList />}  
            <Footer />
        </>
    )
}

export default HomePage
