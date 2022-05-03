import { joinClassNames } from '../../utils/joinClassNames';
import styles from './Button.module.scss';

interface ButtonProps {
  className: string;
  text: string;
  disabled?: boolean;
  onClick?: () => unknown;
}

const Button = ({
  className,
  text,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={joinClassNames([className, styles.button, 'defaultTextFont'])}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
