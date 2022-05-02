import styles from './Title.module.scss';

interface TitleProps {
  text?: string;
}

const Title = ({ text }: TitleProps) => (
  <h1 className={styles.title}>{text}</h1>
);

export default Title;
