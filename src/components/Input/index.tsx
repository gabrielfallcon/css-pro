import { forwardRef, ForwardRefRenderFunction, HTMLAttributes } from "react";
import styles from './styles.module.scss';
interface InputProps extends HTMLAttributes<HTMLInputElement>{
  label: string;
  isRequired?: boolean;
  typeInput?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {label, isRequired, typeInput, ...props},
  ref
) => {
  return (
    <div className={styles.boxInput}>
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
    </div>
  )
}

export default forwardRef(Input);