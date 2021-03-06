import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ColFull = styled.div`
  width: 100%;
  max-width: 100%;
`;

const Bg = styled.div`
  position: absolute;
  width: 400px;
  height: 330px;
  background: ${props => props.primary ? 'var(--primaryGradient)' : 'var(--secondaryGradient)'};
  filter: blur(200px);
  transform: rotate(-108.84deg);
  z-index: -1;

  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 250px;
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
    height: 250px;
  }
  @media only screen and (min-width: 800px) {
    width: 400px;
    height: 330px;
  }
`;

export const BgTop = styled(Bg)`
  left: 2rem;
  top: 0;
`;

export const BgBottom = styled(Bg)`
  right: 2rem;
  bottom: 0;
`;

export const BgExperience = styled(Bg)`
  top: 5rem;
  right: 50%;
  transform: translateX(50%);
  width: 50%;
  height: 100%;
  filter: blur(700px);
`;

export const SectionRows = styled(Row)`
  margin-bottom: 3rem;
`;

export const GradientButton = styled.button`
  padding: 10px 20px;
  color: #fff;
  background-color: black;
  border-radius: 100px;
  position: relative;

  &:before {
    border-radius: 100px;
    content: '';
    background-image: var(--primaryGradient);
    top: -1px;
    left: -1px;
    bottom: -1px;
    right: -1px;
    position: absolute;
    z-index: -1;
    transition: background-image 0.2s ease-in-out;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: #fff;
  background-color: black;
  border-radius: 100px;
  border: 1px solid #fff;
`;

export const SectionTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: 0.02em;
`;

export const SectionContainer = styled.section`
  margin: 2rem 0;
  padding: 3rem 2rem;
  border-bottom: 1px solid var(--dividerColor);
`;
