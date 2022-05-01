import { joinClassNames } from '../../utils/joinClassNames';
import User from '../User/User';
import styles from './UserList.module.scss';

interface iList {
  id?: number;
  name?: string;
  city?: string;
  company?: string;
}

const UserList = () => {
  const list: Array<iList> = [
    {
      id: 1,
      name: 'Иванов Иван',
      city: 'Москва',
      company: 'ООО "Пример"',
    },
    {
      id: 2,
      name: 'Иванов Иван',
      city: 'Москва',
      company: 'ООО "Пример"',
    },
    {
      id: 3,
      name: 'Иванов Иван',
      city: 'Москва',
      company: 'ООО "Пример"',
    },
    {
      id: 4,
      name: 'Иванов Иван',
      city: 'Москва',
      company: 'ООО "Пример"',
    },
    {
      id: 5,
      name: 'Иванов Иван',
      city: 'Москва',
      company: 'ООО "Пример"',
    },
  ];

  return (
    <div className={styles.userListContainer}>
      <h1 className={styles.title}>Список пользователей</h1>
      <section className={styles.users}>
        {list.map((item: iList) => (
          <User
            key={item.id}
            name={item.name}
            city={item.city}
            company={item.company}
          />
        ))}
      </section>
      <p className={joinClassNames([styles.numberOfUsers, 'defaultTextFont'])}>
        Найдено {list.length} пользователей
      </p>
    </div>
  );
};

export default UserList;
