import classNames from 'classnames';
import { ChangeEvent, forwardRef } from 'react';

type InputProps = {
  placeholder?: string;
  name: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: 'text' | 'number' | 'password';
  className?: string;
};

type InputRef = HTMLInputElement | null;

const Input = forwardRef<InputRef, InputProps>(
  ({ value, onChange, name, placeholder, type, className }, ref) => {
    const inputClassName = classNames(
      `${className} bg-darkGray border-none rounded-full px-8 py-4 text-white caret-primary w-full shadow-lg shadow-bgDark focus:outline-none`,
      {}
    );

    return (
      <input
        ref={ref}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
        name={name}
        aria-label={name}
        className={inputClassName}
      />
    );
  }
);

Input.displayName = 'Input Text';

export default Input;
