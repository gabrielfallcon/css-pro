import clsx from "clsx";
import styles from "./styles.module.scss";

interface CardModulesProps {
  title: string;
  description: string;
  srcImg: string;
  isImgSize?: boolean;
}

const CardModules = ({ description, title, srcImg, isImgSize }: CardModulesProps) => {
  return (
    <div className={styles.cardModules}>
      <img src={srcImg} className={clsx(isImgSize && styles.imgGit)} alt="image" />

      <span>{title}</span>
     
      <p>{description}</p>
    </div>
  );
};

export default CardModules;
