import React, {useState} from "react";
import {AboutBtn, AboutBtnContent, AboutText} from "components/AboutUs/styled";
import {ColFull, Container, Row, SectionContainer, SectionRows, SectionTitle} from "assets/style/style";

const about = [
    {
        title: 'About Us',
        content: 'Sade Network is a team established on 1 July 2019 in North Cyprus.'
    },
    {
        title: 'Our Mission',
        content: 'Our mission is to achieve quality work, to make useful, usable programs/applications/projects.'
    },
    {
        title: 'Our Vision',
        content: 'Our vision is to achieve quality work and provide our users with the best service, in the best possible way and free of charge.'
    }
]

const AboutUs = () => {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <SectionContainer>
            <Container>
                <SectionRows>
                    <ColFull>
                        <SectionTitle>About Us</SectionTitle>
                    </ColFull>
                </SectionRows>
                <SectionRows>
                    <AboutBtnContent>
                        {about.map((item, index) => (
                            <AboutBtn key={index} className={activeItem === index && 'active'}
                                      onClick={() => setActiveItem(index)}>{item.title}</AboutBtn>
                        ))}
                    </AboutBtnContent>
                </SectionRows>
                <Row>
                    <AboutText>{about[activeItem].content}</AboutText>
                </Row>
            </Container>
        </SectionContainer>
    )
}

export default AboutUs;
