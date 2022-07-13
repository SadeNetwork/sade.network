import {
    Copyright,
    FooterBrand,
    FooterCopyright,
    FooterLink,
    FooterLinks,
    FooterSection, FooterSocial, FooterSocials,
    Logo,
    Sade
} from "components/Footer/styled";
import SadeLogo from 'assets/img/sadelogo.png';

const Footer = () => {
    return (
        <FooterSection>
            <FooterLinks>
                <FooterLink href="#" target="_blank" rel="noreferrer">Privacy Policy</FooterLink>
                <FooterLink href="mailto:support@sade.network" target="_blank" rel="noreferrer">Contact</FooterLink>
            </FooterLinks>

            <FooterCopyright>
                <FooterBrand>
                    <Logo src={SadeLogo}/>
                    <Sade>Sade</Sade>
                </FooterBrand>

                <Copyright>
                    &copy; 2022 Sade. All rights reserved.
                </Copyright>

                <FooterSocials>
                    <FooterSocial href="https://github.com/SadeNetwork" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"/>
                    </FooterSocial>
                    <FooterSocial href="https://www.linkedin.com/company/sadenetwork/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"/>
                    </FooterSocial>
                    <FooterSocial href="https://twitter.com/SadeNetworkUS" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-twitter"/>
                    </FooterSocial>
                </FooterSocials>
            </FooterCopyright>

        </FooterSection>
    )
}

export default Footer;
