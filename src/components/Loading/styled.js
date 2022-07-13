import styled, {css} from "styled-components";

const center = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;


export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
  
  &.none{
    opacity: 0;
    visibility: hidden;
  }
`;

const anim = () => {
    let styles = '';

    for (let i = 0; i < 4; i += 1) {
        styles += `
        
        @keyframes blurText {
            0% {
                 filter: blur(0px);
                 }
            100% {
                filter: blur(4px);
                 }
        }
        
           &:nth-child(${i + 1}) {
           filter: blur(0px);
           animation: blurText 1.2s ${i / 5}s infinite linear alternate;
    }
     `
    }

    return css`${styles}`;
}

export const LoadingText = styled.p`
  ${center};
  width: 100%;
  height: 100px;
  line-height: 100px;

  span {
    display: inline-block;
    margin: 0 5px;
    color: #fff;
    ${anim()};
  }
`;
