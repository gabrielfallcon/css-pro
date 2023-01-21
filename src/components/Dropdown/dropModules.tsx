import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./styles.module.scss";
import clsx from 'clsx';

interface DropdownModulesProps {
  title: string;
  subtitle: string;
  description: string;
}

const Dropdown = ({ description, subtitle, title }: DropdownModulesProps) => {
  const [isActive, setActive] = useState(false);

  const handleActiveDropdown = () => {
    setActive(!isActive)
  }

  return (
    <div className={styles.dropdownModules} onClick={handleActiveDropdown}>
      <div className={styles.dropdownTitle}>
        <FiChevronRight size={24} color="#00C2FF" className={clsx(isActive && styles.svgActive)}/>

        <span>{title}</span>
      </div>

      <p className={styles.dropdownInfo}>{subtitle}</p>

      <p className={clsx(styles.dropdownDescription, isActive && styles.descriptionActive)}>{description}</p>
    </div>
  );
};

export default Dropdown;
