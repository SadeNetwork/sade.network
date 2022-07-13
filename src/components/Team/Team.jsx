import {BgExperience, Container, Row, SectionContainer, SectionRows, SectionTitle} from "assets/style/style";
import {
    TeamContainer,
    TeamMember,
    TeamMemberImage,
    TeamMemberName,
    TeamMemberPosition, TeamMemberSocial,
    TeamMemberSocials
} from "components/Team/styled";
import {useSelector} from "react-redux";

const Team = () => {
    const members = useSelector(state => state.team.team);

    return (
        <SectionContainer style={{position: 'relative'}}>
            <BgExperience/>
            <Container>
                <SectionRows>
                    <SectionTitle>Team</SectionTitle>
                </SectionRows>
                <Row>
                    <TeamContainer>
                        {
                            members.map((member, index) => (
                                <TeamMember key={index}>
                                    <TeamMemberImage src={member.image} alt={`${member.name} image`}/>
                                    <TeamMemberName>{member.name}</TeamMemberName>
                                    <TeamMemberPosition>{member.position}</TeamMemberPosition>
                                    <TeamMemberSocials>
                                        {member?.socials?.map((social, index) => (
                                            <TeamMemberSocial href={social.url} target="_blank"
                                                              rel="noreferrer" key={index}>
                                                <i className={social.icon}/>
                                            </TeamMemberSocial>
                                        ))}
                                    </TeamMemberSocials>
                                </TeamMember>
                            ))
                        }
                    </TeamContainer>
                </Row>
            </Container>
        </SectionContainer>
    )
}

export default Team;
