import styled from "styled-components";

export const LandingContent = styled.section`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const LandingTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  mix-blend-mode: luminosity;
  font-size: 60px;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

export const LandingSubtitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  letter-spacing: 0.02em;
  color: #212121;
  background: var(--primaryGradient);
  background-size: 100% 100%;
  -webkit-background-clip: text;
  -webkit-text-stroke: 3px transparent;
`;

export const Cta = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
