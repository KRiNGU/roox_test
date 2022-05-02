import { joinClassNames } from '../../utils/joinClassNames';
import styles from './Button.module.scss';

interface ButtonProps {
  className: string;
  text: string;
}

const Button = ({ className, text }: ButtonProps) => {
  return (
    <button
      className={joinClassNames([className, styles.button, 'defaultTextFont'])}
    >
      {text}
    </button>
  );
};

export default Button;
