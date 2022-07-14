import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TeamMember = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  width: 200px;
`;

export const TeamMemberImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 10px;
  object-fit: cover;
  border: 2px solid #212121;
`;

export const TeamMemberName = styled.h3`
  color: #ecf0f1;
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 0;
  text-align: center;
`;

export const TeamMemberPosition = styled.h4`
  color: #ccc;
  font-size: 1rem;
  font-weight: bolder;
  margin-bottom: 0;
  text-align: center;
`;

export const TeamMemberSocials = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

export const TeamMemberSocial = styled.a`
  color: #ecf0f1;
  font-size: 1rem;
  transition: all .2s ease-in-out;
  
  &:hover{
    color: #fff;
    transform: scale(1.2);
  }
`;
