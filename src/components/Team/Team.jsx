import {BgExperience, Container, Row, SectionContainer, SectionRows, SectionTitle} from "assets/style/style";
import {
    TeamContainer,
    TeamMember,
    TeamMemberImage,
    TeamMemberName,
    TeamMemberPosition, TeamMemberSocial,
    TeamMemberSocials
} from "components/Team/styled";

const members = [
    {
        name: 'Fıratcan Ulukaya',
        position: 'CEO',
        image: 'https://sade.network/assets/img/firatcan.png',
        socials: [
            {
                url: 'https://www.linkedin.com/in/firatcanulukaya/',
                icon: 'fa-brands fa-linkedin-in'
            },
            {
                url: 'https://www.twitter.com//firatcanulukaya/',
                icon: 'fa-brands fa-twitter'
            },
            {
                url: 'https://www.github.com//firatcanulukaya/',
                icon: 'fa-brands fa-github'
            },
            {
              url: 'mailto:frtcn@sade.network',
              icon: 'fa-regular fa-envelope'
            },
            {
                url: 'https://frtcn.net',
                icon: 'fa-solid fa-link'
            }
        ]
    }
]

const Team = () => {
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
                                        {member.socials.map((social, index) => (
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
