import { Counter } from "../../components/Counter";
import clsx from 'clsx';

import styles from './styles.module.scss';
import PreSubscribeForm from '../../components/Forms/pre-subscribe';

const PreInscricao = () => {
  return (
    <>
      <section className={styles.section}> 
        <div className={styles.boxForm}>
          <h1 className={styles.titleForm}>
            <span>Pré inscrição </span> <br /> do curso CSS PRO
          </h1>

          <p className={styles.descriptionForm}>
            Inscreva-se para ter vantagens exclusiva e a oportunidade de garantir sua vaga com antecedência.
          </p>

          <PreSubscribeForm />

          <img 
            src="/images/css-pro.svg" 
            alt="CSS Pro" 
            className={styles.mobileImage}
          />
        </div>

        <img 
          src="/images/css-pro.svg" 
          alt="CSS Pro" 
          className={styles.imageArt}
        />
      </section>
      
      <Counter />

      <div 
        className={clsx(
          styles.blur,
          styles.blue,
          styles.topLeft
        )}
      />
      <div 
        className={clsx(
          styles.blur,
          styles.blue,
          styles.topRight
        )}
      />
      <div 
        className={clsx(
          styles.blur,
          styles.green,
          styles.bottomLeft
        )}
      />
      <div 
        className={clsx(
          styles.blur,
          styles.green,
          styles.bottomRight
        )}
      />
    </>
  )
}

export default PreInscricao;