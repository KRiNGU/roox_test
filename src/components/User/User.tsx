import { useNavigate } from 'react-router-dom';
import { joinClassNames } from '../../utils/joinClassNames';
import styles from './User.module.scss';

export interface UserProps {
  id?: number;
  name?: string;
  city?: string;
  company?: string;
}

const User = ({ id, name, city, company }: UserProps) => {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate(`../${id}`);
  };

  return (
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
      <button className={styles.button} onClick={handleOpen}>
        Подробнее
      </button>
    </article>
  );
};

export default User;
