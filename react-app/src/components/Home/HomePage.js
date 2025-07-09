import EventList from "../Events/EventList"
import Banner from "./Banner"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useSelector } from "react-redux"
import MainInfo from "./Splash/MainInfo"
import SecondaryInformation from "./Splash/SecondaryInformation"
import ThirdInfoBox from "./Splash/ThirdInfoBox"


const HomePage = () => {
    const currentUser = useSelector(state => state.session.user)

    return (
        <>
            <NavBar />
            <Banner />
            {!currentUser && <MainInfo />}
            {!currentUser && <SecondaryInformation />}
            {!currentUser && <ThirdInfoBox />}
            {currentUser && <EventList />}  
            <Footer />
        </>
    )
}

export default HomePage
