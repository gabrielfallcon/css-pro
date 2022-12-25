import styles from './styles.module.scss';


export const Counter = () => {
  const timerDay = Date();

  const days = '20';
  const hours = '20';
  const minute = '20';
  return (
    <div className={styles.containerCounter}>
        <h2>
          <span>Prepare-se</span> para o melhor ano da sua carreira de dev front-end
        </h2>

        <div className={styles.timer}>
          <div className={styles.timerItem}>
            <div className={styles.boxNumber}>
              <div>2</div>
              <div>0</div>
            </div>

            <span>Dias</span>
          </div>

          <div className={styles.timerItem}>
            <div className={styles.boxNumber}>
              <div>2</div>
              <div>2</div>
            </div>

            <span>Horas</span>
          </div>

          <div className={styles.timerItem}>
            <div className={styles.boxNumber}>
              <div>5</div>
              <div>6</div>
            </div>

            <span>Minutos</span>
          </div>
        </div>
    </div>
  )
}