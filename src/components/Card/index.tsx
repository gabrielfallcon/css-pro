import clsx from 'clsx';
import styles from './styles.module.scss';

export interface CardProps{
  img: string;
  name: string;
  description: string;
}

export const Card = ({name, img, description}: CardProps) => {

  return (
    <div className={styles.card}>
      <img src={img} alt="" />

      <div className={styles.contentText}>
        <h3>{name}</h3>

        <p>{description}</p>
      </div>
    </div>
  )
}