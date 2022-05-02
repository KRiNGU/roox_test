import styles from './Dashboard.module.scss';
import { joinClassNames } from '../../utils/joinClassNames';
import Button from '../Button/Button';

const Dashboard = () => (
  <div className={styles.dashboard}>
    <p className={joinClassNames(['defaultTextFont', styles.dashboardTitle])}>
      Сортировка
    </p>
    <Button className={styles.button} text="по городу" />
    <Button className={styles.button} text="по компании" />
  </div>
);

export default Dashboard;
