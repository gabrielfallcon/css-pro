import { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';


export const Counter = () => {

  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinute] = useState(0);

  const dateAgended = new Date('Jan 16 2023 07:00:00').getTime();
  const currentTime = new Date().getTime();
  
  const handleTimer = (dateAgended: number, currentTime: number) => {
    setInterval(() => {
      const differrence = dateAgended - currentTime;
      const dayFormat = Math.floor(differrence / 1000 / 60 / 60 / 24);
      const hoursFormat = Math.floor(differrence / 1000 / 60 / 60) % 24;
      const minutesFormat = Math.floor(differrence / 1000 / 60) % 60;
  
      setDay(dayFormat);
      setHours(hoursFormat);
      setMinute(minutesFormat);
    }, 1000);
  };

  // setInterval(() => {
  //   handleTimer(dateAgended, currentTime)
  //   console.log(dateAgended, currentTime)
  // }, 59000);

  useEffect(() => {
    handleTimer(dateAgended, currentTime)
  }, [currentTime, dateAgended]);

  const mapperNumber = (time: number) => {
    let formatTime = String(time).split('');

    if (formatTime.length === 1) {
      formatTime = ['0', String(time)]
    }
    return formatTime;
  }
  
  return (
    <div className={styles.containerCounter}>
        <h2>
          <span>Prepare-se</span> para o melhor ano da sua carreira de dev front-end
        </h2>

        <div className={styles.timer}>
          <div className={styles.timerItem}>
            <div className={styles.boxNumber}>
              <div>{mapperNumber(day)[0]}</div>
              <div>{mapperNumber(day)[1]}</div>
            </div>

            <span>Dias</span>
          </div>

          <div className={styles.timerItem}>
            <div className={styles.boxNumber}>
              <div>{mapperNumber(hours)[0]}</div>
              <div>{mapperNumber(hours)[1]}</div>
            </div>

            <span>Horas</span>
          </div>

          <div className={styles.timerItem}>
            <div className={styles.boxNumber}>
              <div>{mapperNumber(minutes)[0]}</div>
              <div>{mapperNumber(minutes)[1]}</div>
            </div>

            <span>Minutos</span>
          </div>
        </div>
    </div>
  )
}