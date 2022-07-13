import React, {useState} from "react";
import {AboutBtn, AboutBtnContent, AboutText} from "components/AboutUs/styled";
import {ColFull, Container, Row, SectionContainer, SectionRows, SectionTitle} from "assets/style/style";
import {useSelector} from "react-redux";

const AboutUs = () => {
    const about = useSelector(state => state.about.content);
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
