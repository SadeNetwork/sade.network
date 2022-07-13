import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 138px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  backdrop-filter: blur(6px) saturate(180%);
  border-bottom-width: 2px;
  border-color: hsla(0, 0%, 100%, .1);
  border-style: solid;
  background-color: rgb(0 0 0/0.2);
  
  @media only screen and (max-width: 600px) {
    padding: 20px 10px;
  }
  
  @media only screen and (min-width: 600px) {
    padding: 20px 10px;
  }
  @media only screen and (min-width: 800px) {
    padding: 20px 138px;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #ccc;
  font-size: 16px;
  font-weight: 400;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease-in-out;
  
  &:hover{
   color: #ecf0f1; 
  }
  
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 600px) {
    font-size: 13px;
  }
  @media only screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const NavSocials = styled.ul`
  display: flex;
  gap: 1rem;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 800px) {
    display: flex;
  }
`;

export const NavSocial = styled.a`
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  width: 20px;
  height: 20px;
  &:hover {
    transform: scale(1.2);
  }
`;

export const NavSocialIcon = styled.img`
  width: 100%;
  height: 100%;
`;
