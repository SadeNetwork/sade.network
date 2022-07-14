import {Cta, LandingContent, LandingSubtitle, LandingTitle} from './styled'
import {BgBottom, BgTop, Button, GradientButton} from "assets/style/style";

const Landing = () => {
    return (
        <LandingContent>
            <BgTop primary/>
            <BgBottom/>
            <LandingTitle>Sade Network</LandingTitle>
            <LandingSubtitle>new revolution.</LandingSubtitle>
            <Cta>
                <a href="#about"><GradientButton>Learn More</GradientButton></a>
                <a href="#team"><Button>Our Team</Button></a>
            </Cta>
        </LandingContent>
    )
}

export default Landing;
