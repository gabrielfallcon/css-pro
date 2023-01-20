import styles from './styles.module.scss';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/images/logo-css-pro.png" alt="CSS Pro" width={206} height={46}/>
      <Image src="/images/logo-dev-ajuda.png" alt="DevAjuda" width={189} height={79}/>
    </header>
  )
}