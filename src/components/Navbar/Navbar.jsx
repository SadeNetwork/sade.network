import {Nav, NavLink, NavLinks, NavSocial, NavSocials} from "./styled";

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
