import clsx from 'clsx';
import styles from './styles.module.scss';

export interface BlurProps{
  width: string;
  height: string;
  color: 'green' | 'blue';
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  toRenderOnly?: 'desktop' | 'mobile';
}

export const Blur = ({width, height, color, top, right, bottom, left, toRenderOnly}: BlurProps) => {
  const propStyles = {
    width,
    height,
    top,
    right,
    bottom,
    left
  }
  return (
    <div 
      className={clsx(
        styles.blur,
        color === 'blue' ? styles.blurBlue : styles.blurGreen,
        toRenderOnly === 'desktop' ? styles.desktopOnly : styles.mobileOnly
      )} 
      style={propStyles}
    />
  )
}