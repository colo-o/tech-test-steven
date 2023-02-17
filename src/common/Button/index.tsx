import { forwardRef, ReactNode, MouseEvent } from 'react';

type ButtonProps = {
  children?: ReactNode;
  onClick?: (ev: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

type ButtonRef = HTMLButtonElement | null;

const Button = forwardRef<ButtonRef, ButtonProps>(({ children, className }, ref) => {
  const buttonClassName = `${className} bg-primary rounded-lg px-4 py-2 text-white font-medium box-border cursor-pointer shadow-lg shadow-primary/30`

  return <button className={buttonClassName} ref={ref}>{children}</button>
})

Button.displayName = 'Main Button';

export default Button;
