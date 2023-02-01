import clsx from 'clsx';

import styles from './styles.module.scss';
import { Button } from "../../../components/Button";
import { useState } from 'react';
import router from 'next/router';
import Footer from '../../../components/Footer';
import { Header } from '../../../components/Header';

const SucsessBuyCourse = () => {
  const [percent, setPercent] = useState(50);
  const [activeSucess, setActiveSucess] = useState(false);

  const handlePercent = () => {
    setPercent(100)
    setActiveSucess(true)
    setTimeout(() => {
      router.push('https://discord.gg/xqC42pyHNY');
    }, 2000)
  }


  return (
    <>
      <Header />
      <section className={styles.section}> 
        <h1 className={styles.title}>Parabéns!</h1>
        <h2 className={styles.subtitle}>Inscrição realizada com sucesso</h2>

        <div className={styles.boxProgress}>
          <span className={styles.progressTitle}>Quase lá! Falta só mais um passo...</span>

          <div className={styles.contentProgress}>
            <div className={styles.barProgress}>
              <div className={clsx(styles.barPercent, activeSucess && styles.progressSuccess)} />
            </div>
            <span className={styles.percentText}>{percent}%</span>
          </div>
        </div>

        <span className={styles.openWhats}>
          <strong>Entre para nossa comunidade do discord </strong> 
          para tirar dúvidas, networking e oportunidades no mercado!
        </span>

        <Button onClick={handlePercent}>
          acessar comunidade do discord
        </Button>
      </section>

     <Footer />
    </>
  )
}

export default SucsessBuyCourse;