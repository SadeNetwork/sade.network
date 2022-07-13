import styled from "styled-components";

export const AboutContent = styled.section`
  margin: 2rem 0;
  padding: 3rem 2rem;
  border-bottom: 1px solid var(--dividerColor);
`;

export const AboutBtnContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const AboutBtn = styled.button`
  padding: 10px 20px;
  gap: 10px;
  border-radius: 100px;
  color: #ccc;
  border: 1px solid transparent;
  transition: all .3s ease-in-out;

  &:hover {
    border-color: #171717;
  }

  &.active {
    border-color: #606060;
  }
`;

export const AboutText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.02em;
`;
