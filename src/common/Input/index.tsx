import { ChangeEvent, forwardRef } from 'react';

type InputProps = {
  placeholder?: string;
  name: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'password';
};

type InputRef = HTMLInputElement | null;

const Input = forwardRef<InputRef, InputProps>(
  ({ value, onChange, name, placeholder, type }, ref) => {
    return (
      <input
        ref={ref}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
        name={name}
        className="input__field"
      />
    );
  }
);

Input.displayName = 'Input Text';

export default Input;
