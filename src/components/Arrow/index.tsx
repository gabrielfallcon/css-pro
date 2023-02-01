import clsx from 'clsx';
import { ReactElement } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import styles from "./styles.module.scss";

interface ArrowProps extends ReactElement<HTMLDivElement> {
  typeArrow: 'prev' | 'next';
}

type ArrowProp = Omit<ArrowProps, 'key' | 'props' | 'type'>

export const Arrow = ({ typeArrow, ...props }: ArrowProp) => {
  return (
    <div 
      {...props} 
      className={clsx(styles.arrow, typeArrow === 'next' ? styles.nextArrow : styles.prevArrow)} 
    >
      <FiChevronUp size={28} color="#00FF0A"/>
    </div>
  )
}