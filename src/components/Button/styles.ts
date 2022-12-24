import styled from 'styled-components';
import {ButtonProps} from './index';

export const ButtonBox = styled.button<ButtonProps>`
  width: 100%;
  height: 60px;
  border: 1px solid #505050;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #00C2FF 0%, #00FF0A 100%);
  box-shadow: 0px 0px 10px rgba(0, 255, 10, 0.49);
  border-radius: 5px;
  font-size: 18px;
  color: #222425;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.07em;
  cursor: pointer;
`;
