import clsx from "clsx";
import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from "react";
import styles from './styles.module.scss';
interface InputProps extends HTMLAttributes<HTMLInputElement>{
  label: string;
  isRequired?: boolean;
  typeInput?: string;
  error?: any;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {label, isRequired, typeInput, error,...props},
  ref
) => {
  return (
    <div className={clsx(styles.boxInput, error && styles.inputError)}>
      {label && (
        <p className={styles.label}>
          {label} {isRequired && <span>*</span>}
        </p>
      )}
      <input 
        type={typeInput ? typeInput : 'text'} 
        ref={ref}
        {...props}
      />
      <span className={styles.spanError} >{error}</span>
    </div>
  )
}

export default forwardRef(Input);