import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/images/logo-css-pro.png" alt="CSS Pro" />
      <img src="/images/logo-dev-ajuda.png" alt="DevAjuda" width={189}/>
    </header>
  )
}