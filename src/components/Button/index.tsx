import { ButtonHTMLAttributes, ReactNode } from "react"
import { ButtonBox } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
}

export const Button = ({children, ...props}: ButtonProps) => {
  return (
    <ButtonBox {...props}>
      {children}
    </ButtonBox>
  )
}