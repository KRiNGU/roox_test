import styles from './Dashboard.module.scss';
import { joinClassNames } from '../../utils/joinClassNames';

const Dashboard = () => (
  <div className={styles.dashboard}>
    <p className={joinClassNames(['defaultTextFont', styles.dashboardTitle])}>
      Сортировка
    </p>
    <button
      className={joinClassNames([
        'defaultTextFont',
        styles.button,
        'defaultButton',
      ])}
    >
      по городу
    </button>
    <button
      className={joinClassNames([
        'defaultTextFont',
        styles.button,
        'defaultButton',
      ])}
    >
      по компании
    </button>
  </div>
);

export default Dashboard;
