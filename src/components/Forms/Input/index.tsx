import { forwardRef, ForwardRefRenderFunction } from "react";

import { InputBox } from './styles';
interface InputProps {
  label: string;
  isRequired?: boolean;
  typeInput?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {label, isRequired, typeInput, ...props},
  ref
) => {
  return (
    <InputBox>
      {label && (
        <p className="label">
          {label} {isRequired && <span>*</span>}
        </p>
      )}
      <input 
        type={typeInput ? typeInput : 'text'} 
        ref={ref}
        {...props}
      />
    </InputBox>
  )
}

export default forwardRef(Input);