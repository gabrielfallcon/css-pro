import styled from 'styled-components';

export const CounterBox = styled.div`
  width: 100%;
  max-width: 1420px;
  padding: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 42px 89px;
  
  position: relative;
  backdrop-filter: blur(50px);

  /* border: 1px solid transparent; */
  /* border-image: linear-gradient(to left, #00C2FF, #00FF0A); */
  border-image-slice: 1;
  border-image-width: 4px;
  
 
  border-radius: 10px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 10px; 
    padding: 1px; 
    background: linear-gradient(to left, #00C2FF, #00FF0A); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude; 
  }


  h2 {
    width: 100%;
    max-width: 580px;
    text-align: left;
    font-size: 36px;
    line-height: 50px;
    font-weight: 700;
    color: #E6E6E6;
    z-index: 10;

    span {
      background: linear-gradient(90deg, #00C2FF 0%, #00FF0A 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  .timer {
    display: flex;
    gap: 32px;

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;

      .box-number {
        display: flex;
        gap: 12px;

        div {
          width: 55px;
          height: 70px;
          border-radius: 5px;
          position: relative;
          backdrop-filter: blur(18.014px);
          color: #05FF00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 44px;
          background: linear-gradient(180deg, #000000 0%, #4F4F4F 100%);
          margin-bottom: 10px;

          &:before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 5x; 
            padding: 1px; 
            background: linear-gradient(to left, #00C2FF, #00FF0A); 
            -webkit-mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude; 
            opacity: 0.5;
          }
        }
      }

      & > span {
        font-size: 21px;
        color: #E6E6E6;
        text-transform: uppercase;
      }
    }
  }
  
`;