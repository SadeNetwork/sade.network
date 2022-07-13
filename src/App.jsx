import React, {useEffect} from 'react';
import Navbar from 'components/Navbar/Navbar';
import Landing from 'components/Landing/Landing';
import AboutUs from 'components/AboutUs/AboutUs';
import Team from 'components/Team/Team';
import Footer from 'components/Footer/Footer';
import {useSelector} from "react-redux";
import {getAbout, getTeam} from "./firebase";

const App = () => {
    const {team} = useSelector(state => state.team)
    const content = useSelector(state => state.about)

    useEffect(() => {
        getTeam();
        getAbout();
    }, [])

    if(team.length === 0 || content.length === 0) return <p>Loading...</p>
    return (
        <React.Fragment>
            <Navbar/>
            <Landing/>
            <AboutUs/>
            <Team/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
