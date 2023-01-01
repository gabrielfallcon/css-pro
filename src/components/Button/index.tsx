import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react"
import styles from './styles.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
}

export const Button = ({children, ...props}: ButtonProps) => {
  return (
    <button className={styles.btn} {...props}>
      {children}
    </button>
  )
}