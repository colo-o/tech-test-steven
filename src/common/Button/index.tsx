import { forwardRef, ReactNode, MouseEvent } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  children?: ReactNode;
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  disabled?: boolean;
};

type ButtonRef = HTMLButtonElement | null;

const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ children, className, onClick, disabled }, ref) => {
    const buttonClassName = classNames(
      `${className} bg-primary border-2 border-primary rounded-lg px-4 py-2 text-white font-medium box-border cursor-pointer shadow-lg shadow-primary/30 ease-out duration-700`,
      {
        'disabled:bg-transparent disabled:border-gray disabled:text-gray disabled:cursor-not-allowed disabled:shadow-none':
          disabled,
      }
    );

    return (
      <button
        className={buttonClassName}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Main Button';

export default Button;
