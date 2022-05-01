import { joinClassNames } from '../../utils/joinClassNames';
import styles from './User.module.scss';

export interface UserProps {
  name?: string;
  city?: string;
  company?: string;
}

const User = ({ name, city, company }: UserProps) => (
  <article className={styles.list}>
    <p className={joinClassNames([styles.field, 'defaultTextFont'])}>
      <span className={styles.title}>ФИО:</span> {name}
    </p>
    <p className={joinClassNames([styles.field, 'defaultTextFont'])}>
      <span className={styles.title}>город:</span> {city}
    </p>
    <p className={joinClassNames([styles.field, 'defaultTextFont'])}>
      <span className={styles.title}>компания:</span> {company}
    </p>
    <button className={styles.button}>Подробнее</button>
  </article>
);

export default User;
