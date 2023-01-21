import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import styles from "./styles.module.scss";
import clsx from 'clsx';

interface DropdownListProps {
  title: string;
  description: string;
}

const Dropdown = ({ description, title }: DropdownListProps) => {
  const [isActive, setActive] = useState(false);

  const handleActiveDropdown = () => {
    setActive(!isActive)
  }

  return (
    <div className={styles.dropdownList} onClick={handleActiveDropdown}>
      <div className={styles.dropdownTitle}>
        <FiChevronRight size={24} color="#E6E6E6" className={clsx(isActive && styles.svgActive)}/>

        <span>{title}</span>
      </div>

      <p className={clsx(styles.dropdownDescription, isActive && styles.descriptionActive)}>{description}</p>
    </div>
  );
};

export default Dropdown;
