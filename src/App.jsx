import Navbar from 'components/Navbar/Navbar';
import Landing from 'components/Landing/Landing';
import AboutUs from "components/AboutUs/AboutUs";
import Team from "components/Team/Team";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <AboutUs/>
            <Team/>
        </div>
    );
}

export default App;
