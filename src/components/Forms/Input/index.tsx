import { InputBox } from './styles';
interface InputProps {
  label: string;
  isRequired?: boolean;
  typeInput?: string;
}

export const Input = ({label, isRequired, typeInput, ...props}: InputProps) => {
  return (
    <InputBox>
      {label && (
        <p className="label">
          {label} {isRequired && <span>*</span>}
        </p>
      )}
      <input 
        type={typeInput ? typeInput : 'text'} 
        {...props}
      />
    </InputBox>
  )
}