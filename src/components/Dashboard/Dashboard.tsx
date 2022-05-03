import styles from './Dashboard.module.scss';
import { joinClassNames } from '../../utils/joinClassNames';
import Button from '../Button/Button';

interface IDashboard {
  setFilter: (value: string) => unknown;
}

const Dashboard = ({ setFilter }: IDashboard) => (
  <div className={styles.dashboard}>
    <p className={joinClassNames(['defaultTextFont', styles.dashboardTitle])}>
      Сортировка
    </p>
    <Button
      className={styles.button}
      text="по городу"
      onClick={() => setFilter('city')}
    />
    <Button
      className={styles.button}
      text="по компании"
      onClick={() => setFilter('company')}
    />
  </div>
);

export default Dashboard;
