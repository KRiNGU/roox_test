import styles from './UserListPage.module.scss';
import { useEffect } from 'react';
import Title from '../../components/Title/Title';
import User from '../../components/User/User';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { IUserInformation } from '../../models/models';
import { joinClassNames } from '../../utils/joinClassNames';

interface IUserListPage {
  filter: string;
}

const UserListPage = ({ filter }: IUserListPage) => {
  const users: IUserInformation[] = useAppSelector((state) => state.user.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: 'LOAD_USERS' });
  }, [dispatch]);

  const sortedUsers = [...users];

  switch (filter) {
    case 'company':
      sortedUsers.sort((u1, u2) =>
        u1.company.name >= u2.company.name
          ? u1.company.name === u2.company.name
            ? 0
            : 1
          : -1
      );
      break;
    case 'city':
      sortedUsers.sort((u1, u2) =>
        u1.address.city >= u2.address.city
          ? u1.address.city === u2.address.city
            ? 0
            : 1
          : -1
      );
      break;
  }

  return (
    <main className="main">
      <Title text="Список пользователей" />
      <section className={styles.users}>
        {sortedUsers.map((item: IUserInformation) => (
          <User
            key={item.id}
            id={item.id}
            name={item.name}
            city={item.address.city}
            company={item.company.name}
          />
        ))}
      </section>
      <p className={joinClassNames([styles.numberOfUsers, 'defaultTextFont'])}>
        Найдено {users.length} пользователей
      </p>
    </main>
  );
};

export default UserListPage;
