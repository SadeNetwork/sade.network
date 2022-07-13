import React, {useEffect} from 'react';
import Navbar from 'components/Navbar/Navbar';
import Landing from 'components/Landing/Landing';
import AboutUs from 'components/AboutUs/AboutUs';
import Team from 'components/Team/Team';
import Footer from 'components/Footer/Footer';
import {useSelector} from "react-redux";
import {getTeam} from "./firebase";

const App = () => {
    const {team} = useSelector(state => state.team)

    useEffect(() => {
        getTeam();
    }, [])

    if(team.length === 0) return <p>Loading...</p>
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
