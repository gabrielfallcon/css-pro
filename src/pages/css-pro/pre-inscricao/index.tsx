import { Counter } from "../../../components/Counter";
import clsx from "clsx";

import styles from "./styles.module.scss";
import PreSubscribeForm from "../../../components/Forms/pre-subscribe";

const PreInscricao = () => {
  return (
    <>
      <section className={styles.section}>
        <PreSubscribeForm />

        <div className={styles.boxImg}>
          <img
            src="/images/css-pro-new.svg"
            alt="CSS Pro"
            className={styles.imageArt}
          />

          <div className={clsx(styles.blurImage, styles.bottomLeftImage)} />

          <div className={clsx(styles.blurImage, styles.bottomRightImage)} />

          <div className={clsx(styles.blurImage, styles.topRightImage)} />
        </div>
      </section>

      <div className={clsx(styles.blur, styles.blue, styles.topLeft)} />
      <div className={clsx(styles.blur, styles.blue, styles.topRight)} />
      <div className={clsx(styles.blur, styles.green, styles.bottomLeft)} />
      <div className={clsx(styles.blur, styles.green, styles.bottomRight)} />
    </>
  );
};

export default PreInscricao;
