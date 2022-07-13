import React from "react";
import Navbar from 'components/Navbar/Navbar';
import Landing from 'components/Landing/Landing';
import AboutUs from "components/AboutUs/AboutUs";
import Team from "components/Team/Team";
import Footer from "components/Footer/Footer";

const App = () => {
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
