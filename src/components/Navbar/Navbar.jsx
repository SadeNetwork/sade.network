import {Nav, NavLink, NavLinks, NavSocial, NavSocials, SadeText} from "./styled";

const Navbar = () => {
    return (
        <Nav>
            <SadeText href="#">Sade</SadeText>
            <NavLinks>
                <NavLink href='#about'>About Us</NavLink>
                <NavLink href='#team'>Team</NavLink>
            </NavLinks>
            <NavSocials>
                <NavSocial href="https://github.com/SadeNetwork" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"/>
                </NavSocial>
                <NavSocial href="https://www.linkedin.com/company/sadenetwork/" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-linkedin-in"/>
                </NavSocial>
                <NavSocial href="https://twitter.com/SadeNetworkUS" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-twitter"/>
                </NavSocial>
            </NavSocials>
        </Nav>
    )
}

export default Navbar;
