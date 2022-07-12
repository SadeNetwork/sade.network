import {Nav, NavLink, NavLinks, NavSocial, NavSocialIcon, NavSocials} from "./styled";
import github from 'assets/img/github.svg'
import linkedin from 'assets/img/linkedin.svg'
import twitter from 'assets/img/twitter.svg'

const Navbar = () => {
    return (
        <Nav>
            <p>Sade</p>
            <NavLinks>
                <NavLink href='#'>About Us</NavLink>
                <NavLink href='#'>Team</NavLink>
            </NavLinks>
            <NavSocials>
                <NavSocial href="https://github.com/SadeNetwork" target="_blank" rel="noreferrer">
                    <NavSocialIcon src={github}/>
                </NavSocial>
                <NavSocial href="https://www.linkedin.com/company/sadenetwork/" target="_blank" rel="noreferrer">
                    <NavSocialIcon src={linkedin}/>
                </NavSocial>
                <NavSocial href="https://twitter.com/SadeNetworkUS" target="_blank" rel="noreferrer">
                    <NavSocialIcon src={twitter}/>
                </NavSocial>
            </NavSocials>
        </Nav>
    )
}

export default Navbar;
