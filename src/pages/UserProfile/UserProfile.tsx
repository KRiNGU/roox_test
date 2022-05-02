import styles from './UserProfile.module.scss';
import Title from '../../components/Title/Title';
import { joinClassNames } from '../../utils/joinClassNames';
import Button from '../../components/Button/Button';
const UserProfile = () => {
  const name = 'Иванов Иван';
  const userName = 'Ivan';
  const email = 'example@mail.com';
  const street = 'ул. Пример';
  const city = 'Москва';
  const zipCode = '1234234';
  const phone = '89991112233';
  const website = 'www.example.com';
  const comment = '';
  return (
    <main className="main">
      <Title text="Профиль пользователя" />
      <Button className={styles.buttonToggleMode} text="Редактировать" />
      <form className={styles.editUserForm}>
        <label className={styles.changeUserFieldLabel}>
          Name
          <input
            type="text"
            className={styles.changeUserFieldInput}
            placeholder={name}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          User name
          <input
            type="text"
            className={styles.changeUserFieldInput}
            placeholder={userName}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          E-mail
          <input
            type="text"
            className={styles.changeUserFieldInput}
            placeholder={email}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          Street
          <input
            type="text"
            className={styles.changeUserFieldInput}
            placeholder={street}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          City
          <input
            type="text"
            className={styles.changeUserFieldInput}
            placeholder={city}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          Zip code
          <input
            type="text"
            className={styles.changeUserFieldInput}
            placeholder={zipCode}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          Phone
          <input
            type="text"
            className={styles.changeUserFieldInput}
            placeholder={phone}
          />
        </label>
        <label className={styles.changeUserFieldLabel}>
          Website
          <input
            type="text"
            className={styles.changeUserFieldInput}
            placeholder={website}
          />
        </label>
        <label
          className={joinClassNames([
            styles.changeUserFieldLabel,
            styles.comment,
          ])}
        >
          Comment
          <textarea
            className={joinClassNames([
              styles.changeUserFieldInput,
              styles.commentInput,
            ])}
            placeholder={comment}
          />
        </label>
      </form>
      <Button className={styles.buttonSaveForm} text="Отправить" />
    </main>
  );
};

export default UserProfile;
