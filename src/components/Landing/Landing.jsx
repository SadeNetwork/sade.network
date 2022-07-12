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
                <GradientButton>Learn More</GradientButton>
                <Button>Our Team</Button>
            </Cta>
        </LandingContent>
    )
}

export default Landing;
