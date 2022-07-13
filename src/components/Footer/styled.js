import styled from "styled-components";

export const FooterSection = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 150px;
  padding: 10px 100px;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;

export const FooterLink = styled.a`
  color: #8C8C8C;
  text-decoration: none;
  transition: color .3s ease-in-out;
  mix-blend-mode: luminosity;

  &:hover {
    color: #cfd2d3
  }
`;

export const FooterCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-shrink: 0;
  gap: 1rem;
  
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 1rem;
`;

export const Sade = styled.h1`
  color: #fff;
  font-size: 1.2rem;
  font-weight: normal;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FooterSocial = styled.a`
  color: #8C8C8C;
  transition: all .2s ease-in-out;

  &:hover {
    color: #cfd2d3;
    transform: scale(1.2);
  }
`;

export const Copyright = styled.p`
  color: #8C8C8C;
  font-size: 1rem;
  
    @media (max-width: 768px) {
        text-align: center;
      font-size: .9rem;
    }
`;
