import React, {useEffect, useState} from 'react';
import Navbar from 'components/Navbar/Navbar';
import Landing from 'components/Landing/Landing';
import AboutUs from 'components/AboutUs/AboutUs';
import Team from 'components/Team/Team';
import Footer from 'components/Footer/Footer';
import {useSelector} from "react-redux";
import {getAbout, getTeam} from "./firebase";
import Loading from "components/Loading/Loading";

const App = () => {
    const {team} = useSelector(state => state.team)
    const content = useSelector(state => state.about.content)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTeam();
        getAbout();
    }, [])

    useEffect(() => {
        if(team.length > 0 || content.length > 0) setLoading(false)
    }, [team, content])

    return (
        <React.Fragment>
            <Loading show={loading}/>
            <Navbar/>
            <Landing/>
            <AboutUs/>
            <Team/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
