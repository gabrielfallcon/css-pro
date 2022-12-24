import styled, {css} from 'styled-components';

interface BlurProps {
  positionBlur: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  dimension: number;
  color: 'green' | 'blue';
}

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 0 32px;
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1420px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin: 68px auto 48px;
`;

export const Blur = styled.div`
  width: ${(props: BlurProps) => `${props.dimension}px`};
  height: ${(props: BlurProps) => `${props.dimension}px`};
  border-radius: 50%;
  position: absolute;
  opacity: 0.3;
  z-index: -1;


  filter: blur(150px);
  background: ${(props: BlurProps) => props.color === 'blue' ? '#00C2FF' : '#05FF00'};

  ${(props: BlurProps) => {
    switch(props.positionBlur) {
      case 'top-left':
        return positionTopLeft
      case 'top-right':
        return positionTopRight
      case 'bottom-left': 
        return positionBottomLeft
      case 'bottom-right':
        return positionBottomRight
    }
  }}
`;

const positionTopLeft = css`
  top: 11px;
  left: -171px;
`;
const positionTopRight = css`
  top: 20px;
  right: -216px;
`;
const positionBottomLeft = css`
  bottom: -102px;
  left: -266px;
`;
const positionBottomRight= css`
  bottom: -84px;
  right: -184px;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1420px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  position: relative;
  margin-bottom: 80px;

  .image-art {
    width: 100%;
    max-width: 950px;
    position: absolute;
    right: -10%;
    top: 0;
    z-index: -1;
  }
`;

export const BoxForm = styled.div`
  width: 100%;
  max-width: 591px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .titleForm {
    font-size: 50px;
    font-weight: 800;
    line-height: 70px;
    margin-bottom: 30px;
    color: #E6E6E6;
    
    span {
      font-weight: 400;
      background: linear-gradient(90deg, #00C2FF 0%, #00FF0A 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }
  .descriptionForm {
    width: 100%;
    max-width: 420px;
    font-size: 16px;
    line-height: 33px;
    color: #E6E6E6;
    margin-bottom: 30px;
  }
  form {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 20px;
  }
`;