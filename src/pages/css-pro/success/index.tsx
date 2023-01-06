import clsx from 'clsx';

import styles from './styles.module.scss';
import { Button } from "../../../components/Button";
import { useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import router from 'next/router';

const PreInscricao = () => {
  const [percent, setPercent] = useState(50);
  const [activeSucess, setActiveSucess] = useState(false);

  const handlePercent = () => {
    setPercent(100)
    setActiveSucess(true)
    setTimeout(() => {
      router.push('https://chat.whatsapp.com/LhycdAz33lkLppyjbLV4Ba');
    }, 2000)
  }

  const onClickSocial = (url: string) => {
    router.push(url);
  }
  return (
    <>
      <section className={styles.section}> 
        <h1 className={styles.title}>Parabéns!</h1>
        <h2 className={styles.subtitle}>Pré inscrição realizada com sucesso</h2>

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
          <strong>Entre para nosso grupo no whatsapp </strong> 
          para receber o aviso de inscrições abertas e aproveitar todos os conteúdos enquanto aguarda pelo curso!
        </span>

        <Button onClick={handlePercent}>WHATSAPP</Button>
      </section>

      <footer className={styles.footer}>
        <div className={styles.boxSocial}>
          <FaInstagram size={27} color="#0D0F10" onClick={() => onClickSocial('https://www.instagram.com/devajuda/')}/>
        </div>
        <div className={styles.boxSocial} onClick={() => onClickSocial('https://www.youtube.com/@devajuda')}>
          <FaYoutube size={27} color="#0D0F10"/>
        </div>
      </footer>
    </>
  )
}

export default PreInscricao;